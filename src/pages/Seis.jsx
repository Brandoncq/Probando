import { useState, useEffect } from "react";
import { chisquare } from "jstat";
import kstest from "@stdlib/stats-kstest";

function Seis() {
  const [variables, setVariales] = useState({
    x: "",
    D: "",
    repeticiones: "",
    confianza: "",
  });
  const [list, setList] = useState({ x: [], r: [] });
  const [chilist, setChiList] = useState({
    intervalo_inf: [],
    intervalo_sup: [],
    o: [],
    e: "",
    chiSquare: [],
    m: "",
  });
  const [Kolmogorov, setKolmogorov] = useState([]);
  const [tendencia, setTendencia] = useState({
    chicuadrado: "",
    kolmogorov: {
      dmas: 0,
      dmen: 0,
      valor: 0,
      mayor: 0,
    },
    n: "",
    m: 0,
  });

  const resolver = () => {
    const { x, D, repeticiones, confianza } = variables;

    // Verificar que todas las variables existan y no estén vacías
    if (x && D && repeticiones && confianza) {
      let i = 0;
      let xValues = [];
      let rValues = [];

      xValues[0] = Number(variables.x);
      const makeEvenDigits = (numStr) => {
        return numStr.length % 2 !== 0 ? "0" + numStr : numStr;
      };
      const getMiddleDigits = (num, D) => {
        let squared = Math.pow(num, 2).toString();
        squared = makeEvenDigits(squared);

        let middleStart = Math.floor((squared.length - D) / 2);
        return squared.substring(middleStart, middleStart + D);
      };

      for (let i = 1; i < Number(repeticiones); i++) {
        const middleDigits = getMiddleDigits(xValues[i - 1], Number(D));

        xValues.push(Number(middleDigits));
        rValues.push(Number(middleDigits) / Math.pow(10, Number(D)));
        if (i == Number(repeticiones) - 1) {
          rValues.push(Number(middleDigits) / Math.pow(10, Number(D)));
        }
      }

      const n = rValues.length - 1;
      const alpha = 1 - Number(variables.confianza) / 100;
      const E = Math.floor(Math.sqrt(n));
      const lowerBounds = [];
      const upperBounds = [];

      const intervalSize = 1 / E;
      for (let i = 0; i < E; i++) {
        const lower = i * intervalSize;
        const upper = (i + 1) * intervalSize;
        lowerBounds.push(lower);
        upperBounds.push(upper);
      }

      const groupedValues = [];
      for (let i = 0; i < lowerBounds.length; i++) {
        const lower = lowerBounds[i];
        const upper = upperBounds[i];

        const valuesInInterval = rValues
          .slice(1)
          .filter((value) =>
            i < lowerBounds.length - 1
              ? value >= lower && value < upper
              : value >= lower && value <= upper
          );
        groupedValues.push({
          interval: `[${lower.toFixed(2)}, ${upper.toFixed(2)})`,
          values: valuesInInterval.length,
        });
      }

      let restas_chi = [];
      groupedValues.map((value) => {
        restas_chi.push(
          Math.pow((n - 1) / E - value.values, 2) / ((n - 1) / E)
        );
      });

      const sortedValues = [...rValues].sort((a, b) => a - b);
      const kvalues = sortedValues.map((value, index) => {
        return index / n - rValues[index];
      });
      const max = Math.max(...kvalues);
      const min = Math.min(...kvalues);
      const data = kstest(rValues.slice(1), "uniform", 0.0, 1.0);
      setKolmogorov(kvalues);
      setChiList({
        intervalo_inf: lowerBounds,
        intervalo_sup: upperBounds,
        o: groupedValues.map((group) => group.values),
        e: n / E,
        m: E,
        chiSquare: restas_chi,
      });
      setTendencia({
        chicuadrado: chisquare.inv(alpha, E - 1),
        kolmogorov: {
          dmas: max,
          dmen: min,
          valor: data.pValue,
          mayor: max > Math.abs(min) ? max : Math.abs(min),
        },
        n: n - 1,
      });
      setList({ x: xValues, r: rValues });
    }
  };

  return (
    <div className="w-full bg-zinc-100 min-h-lvh">
      <div className="w-full flex flex-wrap justify-center">
        <h1 className="text-4xl text-center w-full my-4 font-light">
          Pruebas estadísticas para los números pseudoaleatorios
        </h1>
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl text-center w-full my-4 text-zinc-700">
            Y<sub>i+1</sub> = (X<sub>i</sub>
            <sup>2</sup>)
          </h2>
          <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-200">
              <thead className="text-xs  uppercase bg-zinc-700 text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Variable
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-zinc-800 border-gray-700 hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    X
                  </th>
                  <td className="px-6 py-4">Semilla</td>
                  <td className="px-6 py-4">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.x}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          x: e.target.value,
                        }));
                      }}
                    />
                  </td>
                </tr>
                <tr className="border-b bg-zinc-800 border-gray-700 hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    D
                  </th>
                  <td className="px-6 py-4">Digitos</td>
                  <td className="px-6 py-4">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.D}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          D: e.target.value,
                        }));
                      }}
                    />
                  </td>
                </tr>

                <tr className="border-b bg-zinc-800 border-gray-700 hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    #
                  </th>
                  <td className="px-6 py-4">Repeticiones</td>
                  <td className="px-6 py-4 flex">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.repeticiones}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          repeticiones: e.target.value,
                        }));
                      }}
                    />
                  </td>
                </tr>
                <tr className="border-b bg-zinc-800 border-gray-700 hover:bg-gray-600">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap text-white"
                  >
                    1 - α
                  </th>
                  <td className="px-6 py-4">Nivel de confianza</td>
                  <td className="px-6 py-4 flex">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.confianza}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          confianza: e.target.value,
                        }));
                      }}
                    />
                    %
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full flex justify-center my-3">
            <button
              onClick={resolver}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2"
            >
              Resolver
            </button>
          </div>
        </div>
        {list.x.length > 0 && (
          <>
            <h1 className="text-4xl text-center w-full mt-4 mb-2 font-light">
              Resolución
            </h1>
            <div className="w-full mt-6 flex flex-wrap min-h-lvh">
              <div className="w-1/2 p-10 h-full">
                <div className="w-full relative overflow-x-auto shadow-md sm:rounded-lg h-full">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-200 h-full">
                    <thead className="text-xs bg-gray-700 text-white flex w-full">
                      <tr className="w-full flex">
                        <th scope="col" className="px-6 py-3 w-1/5">
                          i
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/5">
                          X<sub>i</sub>
                        </th>
                        <th scope="col" className="px-6 py-3 w-2/5">
                          r<sub>i</sub>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="h-5/6 overflow-y-scroll w-full flex flex-col">
                      {list.x.map((xValue, index) => (
                        <tr
                          key={index}
                          className="flex w-full border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
                        >
                          <td className="px-6 py-4 w-1/5 font-medium whitespace-nowrap text-white">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 w-2/5">{xValue}</td>
                          <td className="px-6 py-4 w-2/5">{list.r[index]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="w-1/2 p-10">
                <h2 className="text-3xl font-light my-2">
                  n: {tendencia.n + 2}
                </h2>
                <h2 className="text-3xl font-light my-2">Uniformidad</h2>
                <p className="text-2xl">Prueba Chi-cuadrada</p>
                <div className="w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-200">
                    <thead className="text-xs bg-gray-700 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Intervalo
                        </th>
                        <th scope="col" className="px-6 py-3">
                          O<suv>i</suv>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          E<suv>i</suv>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          (O<sub>i</sub> - E<sub>i</sub>)<sup>2</sup> / E
                          <sub>i</sub>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {chilist.intervalo_inf.map((_, index) => (
                        <tr
                          key={index}
                          className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600"
                        >
                          <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                            [{chilist.intervalo_inf[index].toFixed(3)}-
                            {chilist.intervalo_sup[index].toFixed(3)}]
                          </td>
                          <td className="px-6 py-4">{chilist.o[index]}</td>
                          <td className="px-6 py-4">{chilist.e.toFixed(4)}</td>
                          <td className="px-6 py-4">
                            {chilist.chiSquare[index].toFixed(4)}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-b  bg-gray-700 text-white">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Total
                        </td>
                        <td className="px-6 py-4">
                          {chilist.o.reduce((acc, val) => acc + val, 0)}
                        </td>
                        <td className="px-6 py-4">
                          {(chilist.e.toFixed(4) * chilist.m).toFixed(3)}
                        </td>
                        <td className="px-6 py-4">
                          {chilist.chiSquare
                            .reduce((acc, val) => acc + val, 0)
                            .toFixed(4)}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-3xl font-light my-2">
                  X<sup>2</sup>
                  <sub>0</sub>: {tendencia.chicuadrado}
                  <p className="text-xl">
                    {tendencia.chicuadrado >
                    chilist.chiSquare.reduce((acc, val) => acc + val, 0)
                      ? `${chilist.chiSquare.reduce(
                          (acc, val) => acc + val,
                          0
                        )} es menor que ${
                          tendencia.chicuadrado
                        }. Entonces no se puede rechazar la uniformidad de los números aleatorios.`
                      : `${chilist.chiSquare.reduce(
                          (acc, val) => acc + val,
                          0
                        )} es mayor que ${
                          tendencia.chicuadrado
                        }. Entonces se puede rechazar la uniformidad de los números aleatorios.`}
                  </p>
                </h2>
                <p className="text-2xl">Prueba Kolmogorov-Smirnov</p>
                <div className="w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-200">
                    <thead className="text-xs bg-gray-700 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          i
                        </th>
                        {Kolmogorov.map((_, index) => (
                          <th scope="col" className="px-6 py-3">
                            {index + 1}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          i/n - r<sub>i</sub>
                        </td>
                        {Kolmogorov.map((value, index) => (
                          <th scope="col" className="px-6 py-3">
                            {value}
                          </th>
                        ))}
                      </tr>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          r<sub>i</sub> - i/n
                        </td>
                        {Kolmogorov.map((value, index) => (
                          <th scope="col" className="px-6 py-3">
                            {-value}
                          </th>
                        ))}
                      </tr>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          D<sup>+</sup>
                        </td>
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          {tendencia.kolmogorov.dmas}
                        </td>
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          D<sup>-</sup>
                        </td>
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          {tendencia.kolmogorov.dmen}
                        </td>
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          D
                        </td>
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          {tendencia.kolmogorov.mayor}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xl">
                  {tendencia.kolmogorov.valor > tendencia.kolmogorov.mayor
                    ? `${tendencia.kolmogorov.valor} es mayor que ${tendencia.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`
                    : `${tendencia.kolmogorov.valor} es menor que ${tendencia.kolmogorov.mayor}.Por lo tanto, se concluye que los núm eros del conjunto r¡ se distribuyen uniformemente.`}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Seis;
