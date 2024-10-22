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
function Cinco() {
  const [variables, setVariales] = useState({
    x: "",
    a: "",
    c: "",
    m: "",
    intervalos: "",
    intervaloi: "",
    confianza: "",
  });
  const [list, setList] = useState({ x: [], r: [] });

  const [tendencia, setTendencia] = useState({
    media: { valor: "", li: "", ls: "" },
    varianza: { valor: "", li: "", ls: "" },

    n: "",
  });

  const resolver = () => {
    const { x, a, c, m, intervaloi, intervalos, confianza } = variables;

    if (x && a && c && m && intervaloi && intervalos && confianza) {
      let i = 0;
      let xValues = [];
      let rValues = [];

      let tempX = Number(variables.x);
      for (let i = 1; i <= Number(intervalos); i++) {
        const data =
          (Number(variables.c) + Number(variables.a) * tempX) %
          Number(variables.m);
        tempX = data;
        if (i >= Number(intervaloi) && i <= Number(intervalos)) {
          xValues.push(tempX);
          rValues.push(tempX / (Number(variables.m) - 1));
        }
      }

      const n = rValues.length - 1;
      const alpha = 1 - Number(variables.confianza) / 100;
      const media_valor =
        rValues.slice(1).reduce((acc, curr) => acc + curr, 0) / n;
      const z = invNorm(1 - alpha / 2);
      const media_li = 1 / 2 - z * (1 / Math.sqrt(12 * n));
      const media_ls = 1 / 2 + z * (1 / Math.sqrt(12 * n));
      const varianza_valor =
        rValues
          .slice(1)
          .reduce((acc, curr) => acc + Math.pow(+curr - media_valor, 2), 0) /
        (n - 1);
      const chiSquaredUpper = chisquare.inv(1 - alpha / 2, n - 1);
      const varianza_ls = chiSquaredUpper / (12 * (n - 1));
      const chiSquaredLower = chisquare.inv(alpha / 2, n - 1);
      const varianza_li = chiSquaredLower / (12 * (n - 1));
      setTendencia((prev) => ({
        varianza: {
          valor: varianza_valor,
          li: varianza_li,
          ls: varianza_ls,
        },
        media: { valor: media_valor, li: media_li, ls: media_ls },
        n: n - 1,
      }));
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
            X<sub>i+1</sub> = (aX<sub>i</sub> + c) mod (m)
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
                    a
                  </th>
                  <td className="px-6 py-4">Constante multiplicativa</td>
                  <td className="px-6 py-4">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.a}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          a: e.target.value,
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
                    c
                  </th>
                  <td className="px-6 py-4">Constante aditiva</td>
                  <td className="px-6 py-4">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.c}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          c: e.target.value,
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
                    m
                  </th>
                  <td className="px-6 py-4">Módulo</td>
                  <td className="px-6 py-4">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.m}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          m: e.target.value,
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
                  <td className="px-6 py-4">Repeticiones Incio</td>
                  <td className="px-6 py-4 flex">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.intervaloi}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          intervaloi: e.target.value,
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
                  <td className="px-6 py-4">Repeticiones Fin</td>
                  <td className="px-6 py-4 flex">
                    <input
                      className="bg-transparent w-full outline-none"
                      type="number"
                      value={variables.intervalos}
                      onChange={(e) => {
                        setVariales((prev) => ({
                          ...prev,
                          intervalos: e.target.value,
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
                            {index + Number(variables.intervaloi)}
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
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Limite Inferior
                        </td>
                        <td className="px-6 py-4">{tendencia.media.li}</td>
                      </tr>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Limite Superior
                        </td>
                        <td className="px-6 py-4">{tendencia.media.ls}</td>
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
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Limite Inferior
                        </td>
                        <td className="px-6 py-4">{tendencia.varianza.li}</td>
                      </tr>
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Limite Superior
                        </td>
                        <td className="px-6 py-4">{tendencia.varianza.ls}</td>
                      </tr>{" "}
                      <tr className="border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                        <td className="px-6 py-4 font-medium whitespace-nowrap text-white">
                          Análisis
                        </td>
                        <td className="px-6 py-4">
                          {tendencia.varianza.li.toFixed(4)}&nbsp;&lt;&nbsp;
                          {tendencia.varianza.valor.toFixed(4)}&nbsp;&lt;&nbsp;
                          {tendencia.varianza.ls.toFixed(4)}
                          <p>
                            {tendencia.varianza.valor > tendencia.varianza.li &&
                            tendencia.varianza.valor < tendencia.varianza.ls
                              ? "El valor de la varianza se encuentra dentro de los límites."
                              : "El valor de la varianza está fuera de los límites."}
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Cinco;
