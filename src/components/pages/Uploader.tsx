import React from "react";

const Uploader = () => {
  return (  <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center  justify-start">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          Upload Excel File
        </h2>

        {/* File input with styling */}
        <input
          type="file"
          accept=".xlsx, .xls"
        //   onChange={handleFileUpload}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0 file:text-sm file:font-semibold
            file:bg-cyan-100 file:text-cyan-800 hover:file:bg-cyan-200 transition"
        />

        {/* Excel data table display
        {excelData.length > 0 && (
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-300 text-sm text-left text-gray-700">
              <tbody>
                {excelData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                  >
                    {row.map((cell: any, cellIndex: number) => (
                      <td key={cellIndex} className="px-4 py-2 border border-gray-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Uploader;
