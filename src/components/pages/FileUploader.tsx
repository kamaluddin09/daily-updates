import React, { useState } from "react";
import * as XLSX from "xlsx";
import { toast } from "react-toastify";

const App: React.FC = () => {
  // State to store the parsed Excel data as a 2D array
  const [excelData, setExcelData] = useState<any[][]>([]);

  // Handle file upload and parse Excel data
  const handleFileUpload = (e: any) => {
    const file = e.target.files?.[0];
    console.log("the output of file is :", file);
    if (!file) {
      toast.error("No file selected");
      return; 
    }

    // Validate file type
    if (!file.name.endsWith(".xlsx") && !file.name.endsWith(".xls")) {
      toast.error("Invalid file type. Please upload an Excel file.");
      return; 
    }

    //Validate file size
    if (file.size > 2 * 1024 * 1024 ) {
      toast.warn("File is too large. Max size is 2MB.");
      return; 
    }

    // ✅ If all validations pass, continue reading file
    // toast.info("Reading file...");

    const reader = new FileReader();

    reader.onload = (evt) => {
      const data = evt.target?.result;

      if (!data) {        
        toast.error("Failed to read file content.");
        return;
      }

      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData: any[][] = XLSX.utils.sheet_to_json(worksheet, {
        header: 1,
      });

      setExcelData(jsonData);
      toast.success("File processed successfully!");
    };

    reader.readAsBinaryString(file);
  };
  const updateCell = (rowIndex: number, cellIndex: number, value: string) => {
    const updatedData = [...excelData];
    updatedData[rowIndex][cellIndex] = value;
    setExcelData(updatedData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center  justify-start">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mt-16">
        <h2 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          Upload Excel File
        </h2>

        {/* File input with styling */}
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4
            file:rounded file:border-0 file:text-sm file:font-semibold
            file:bg-cyan-100 file:text-cyan-800 hover:file:bg-cyan-200 transition"
        />

        {/* Excel data table display */}
        {excelData.length > 0 && (
          <div className="overflow-x-auto mt-8">
            <table className="min-w-full border border-gray-300 text-sm text-left text-gray-700">
              <tbody>
                {excelData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={rowIndex % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    {row.map((cell: any, cellIndex: number) => (
                      <td
                        key={cellIndex}
                        className="px-4 py-2 border border-gray-300"
                      >
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) =>
                            updateCell(rowIndex, cellIndex, e.target.value)
                          }
                          className="w-full bg-transparent focus:outline-none"
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
