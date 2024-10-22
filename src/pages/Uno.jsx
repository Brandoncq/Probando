import { useState, useEffect } from "react";
import { chisquare } from "jstat";
import kstest from "@stdlib/stats-kstest";

function invNorm(p) {
  // Aproximación de Beasley-Springer/Moro para obtener el valor z
  const a1 = -39.6968302866538,
    a2 = 220.946098424521,
    a3 = -275.928510446969;
  const a4 = 138.357751867269,
    a5 = -30.6647980661472,
    a6 = 2.50662827745924;
  const b1 = -54.4760987982241,
    b2 = 161.585836858041,
    b3 = -155.698979859887;
  const b4 = 66.8013118877197,
    b5 = -13.2806815528857;
  const c1 = -0.00778489400243029,
    c2 = -0.322396458041136;
  const c3 = -2.40075827716184,
    c4 = -2.54973253934373,
    c5 = 4.37466414146497;
  const c6 = 2.93816398269878;
  const d1 = 0.00778469570904146,
    d2 = 0.32246712907004;
  const d3 = 2.445134137143,
    d4 = 3.75440866190742;

  let q, r;

  if (p < 0.02425) {
    q = Math.sqrt(-2 * Math.log(p));
    return (
      (((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
      ((((d1 * q + d2) * q + d3) * q + d4) * q + 1)
    );
  } else if (p <= 0.97575) {
    q = p - 0.5;
    r = q * q;
    return (
      ((((((a1 * r + a2) * r + a3) * r + a4) * r + a5) * r + a6) * q) /
      (((((b1 * r + b2) * r + b3) * r + b4) * r + b5) * r + 1)
    );
  } else {
    q = Math.sqrt(-2 * Math.log(1 - p));
    return (
      -(((((c1 * q + c2) * q + c3) * q + c4) * q + c5) * q + c6) /
      ((((d1 * q + d2) * q + d3) * q + d4) * q + 1)
    );
  }
}

function Uno() {
  const [variables, setVariales] = useState({
    confianza: "",
  });
  const [list, setList] = useState({ r: [] });
  const [chilist, setChiList] = useState({
    intervalo_inf: [],
    intervalo_sup: [],
    o: [],
    e: "",
    chiSquare: [],
  });
  const [Kolmogorov, setKolmogorov] = useState([]);
  const [tendencia, setTendencia] = useState({
    media: { valor: "", li: "", ls: "" },
    varianza: { valor: "", li: "", ls: "" },
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
    const { confianza } = variables;
    if (confianza) {
      let rValues = [
        17.392, 8.11, 4.078, 3.151, 3.528, 2.44, 5.924, 3.461, 2.052, 10.369,
        3.69, 10.87, 4.793, 2.498, 0.569, 8.281, 0.154, 5.959, 3.384, 12.877,
        13.602, 5.244, 16.677, 5.977, 4.313, 4.767, 2.381, 6.443, 1.392, 1.578,
        8.115, 4.891, 6.72, 7.728, 2.717, 10.451, 5.901, 0.818, 7.088, 2.637,
        4.714, 3.032, 1.495, 15.733, 7.768, 2.333, 7.822, 3.708, 6.412, 1.29,
        3.957, 5.285, 7.094, 3.078, 1.264, 2.63, 10.177, 2.155, 2.945, 7.552,
        11.094, 4.772, 7.281, 14.344, 19.867, 0.119, 2.072, 1.486, 3.791, 4.214,
        1.611, 1.781, 1.53, 3.28, 4.301, 0.202, 7.489, 1.422, 1.453, 0.022,
        6.001, 9.269, 8.477, 3.043, 0.877, 6.966, 2.103, 1.816, 0.433, 2.547,
        0.843, 1.182, 8.121, 2.007, 1.395, 4.661, 7.378, 5.3, 17.066, 12.171,
      ];

      const n = rValues.length - 1;
      console.log(n);
      const media_valor =
        rValues.reduce((acc, curr) => acc + curr, 0) / (n + 1);
      const alpha = 1 - Number(variables.confianza) / 100;
      const z = invNorm(1 - alpha / 2);
      const media_li = 1 / 2 - z * (1 / Math.sqrt(12 * n));
      const media_ls = 1 / 2 + z * (1 / Math.sqrt(12 * n));
      const varianza_valor =
        rValues
          .slice(1)
          .reduce((acc, curr) => acc + Math.pow(+curr - media_valor, 2), 0) /
        (n - 1);

      const E = Math.floor(Math.sqrt(n + 1));

      const chiSquaredUpper = chisquare.inv(1 - alpha / 2, n - 1);
      const varianza_ls = chiSquaredUpper / (12 * (n - 1));
      const chiSquaredLower = chisquare.inv(alpha / 2, n - 1);
      const varianza_li = chiSquaredLower / (12 * (n - 1));

      const lowerBounds = [];
      const upperBounds = [];
      const min = Math.min(...rValues); // Encuentra el mínimo del array
      const max = Math.max(...rValues); // Encuentra el máximo del array
      console.log(min, max);
      const range = max - min; // Calcula el rango (diferencia entre max y min)
      const intervalSize = range / E; // Calcula el tamaño de cada intervalo

      for (let i = 0; i < E; i++) {
        const lower = min + i * intervalSize; // Límite inferior ajustado
        const upper = min + (i + 1) * intervalSize; // Límite superior ajustado

        lowerBounds.push(Math.round(lower));
        if (i == E - 1) {
          upperBounds.push(upper);
        } else {
          upperBounds.push(Math.round(upper));
        }
      }

      console.log(lowerBounds, upperBounds);

      const groupedValues = [];

      for (let i = 0; i < lowerBounds.length; i++) {
        const lower = lowerBounds[i];
        const upper = upperBounds[i];
        console.log(lower, upper);

        if (i < lowerBounds.length - 1) {
          const valuesInInterval = rValues.filter(
            (value) => value >= lower && value < upper
          );
          groupedValues.push({
            interval: `[${lower.toFixed(2)}, ${upper.toFixed(2)})`,
            values: valuesInInterval.length,
          });
        } else {
          const valuesInInterval = rValues.filter(
            (value) => value >= lower && value <= upper
          );
          groupedValues.push({
            interval: `[${lower.toFixed(2)}, ${upper.toFixed(2)})`,
            values: valuesInInterval.length,
          });
        }
      }

      let px_chi = [];
      function factorial(num) {
        if (num === 0 || num === 1) return 1;
        return num * factorial(num - 1);
      }

      groupedValues.map((value, index) => {
        const nPlusOne = media_valor;
        const power1 = Math.pow(nPlusOne, lowerBounds[index]);
        const expNPlusOne = Math.exp(-nPlusOne);
        const lowerBoundFactorial = factorial(lowerBounds[index]);
        const power2 = Math.pow(nPlusOne, upperBounds[index]);
        const UpperBoundFactorial = factorial(Math.round(upperBounds[index]));
        px_chi.push(
          (power1 * expNPlusOne) / lowerBoundFactorial +
            (power2 * expNPlusOne) / UpperBoundFactorial
        );
      });
      let restas_chi = [];
      groupedValues.map((value, index) => {
        restas_chi.push(
          Math.pow(px_chi[index] * (n + 1) - value.values, 2) /
            (px_chi[index] * (n + 1))
        );
      });
      setChiList({
        intervalo_inf: lowerBounds,
        intervalo_sup: upperBounds,
        px: px_chi,
        o: groupedValues.map((group) => group.values),
        e: n / E,
        m: E,
        chiSquare: restas_chi,
      });
      setTendencia((prev) => ({
        varianza: {
          valor: varianza_valor,
          li: varianza_li,
          ls: varianza_ls,
        },
        media: { valor: media_valor, li: media_li, ls: media_ls },
        chicuadrado: chisquare.inv(alpha, E - 1),
        n: n - 1,
      }));
      setList({ r: rValues });
    }
  };

  return (
    <div className="w-full bg-zinc-100 min-h-lvh">
      <div className="w-full flex flex-wrap justify-center">
        <h1 className="text-4xl text-center w-full my-4 font-light">
          Pruebas estadísticas para los números pseudoaleatorios
        </h1>
        <div className="w-1/2 flex flex-col justify-center">
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
        {list.r.length > 0 && (
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
                          r<sub>i</sub>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="h-5/6 overflow-y-scroll w-full flex flex-col">
                      {list.r.map((xValue, index) => (
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
                <h2 className="text-3xl font-light my-2">Media</h2>
                <div className="w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-200">
                    <thead className="text-xs bg-gray-700 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Datos
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Resultado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Promedio
                        </td>
                        <td className="px-6 py-4">{tendencia.media.valor}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-3xl font-light my-2">Varianza</h2>
                <div className="w-full flex-col relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-200">
                    <thead className="text-xs bg-gray-700 text-white">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Datos
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Resultado
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Varianza
                        </td>
                        <td className="px-6 py-4">
                          {tendencia.varianza.valor}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
                          p(x)
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
                          <td className="px-6 py-4">
                            {chilist.px[index].toFixed(4)}
                          </td>
                          <td className="px-6 py-4">
                            {(chilist.px[index] * (tendencia.n + 2)).toFixed(4)}
                          </td>
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
                          {chilist.px
                            .reduce((acc, val) => acc + val, 0)
                            .toFixed(4)}
                        </td>
                        <td className="px-6 py-4">
                          {chilist.px
                            .reduce(
                              (acc, val) => acc + val * (tendencia.n + 2),
                              0
                            )
                            .toFixed(4)}
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
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Uno;
