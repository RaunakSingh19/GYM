// import React, { useState } from "react";

// const FolderTree = ({ data, onSelectFile }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div style={{ marginLeft: "20px" }}>
//       {/* Folder or File */}
//       {data.children ? (
//         <div>
//           <span
//             onClick={handleToggle}
//             style={{ cursor: "pointer", fontWeight: "bold" }}
//           >
//             {isExpanded ? "📂" : "📁"} {data.name}
//           </span>
//           {isExpanded && (
//             <div>
//               {data.children.map((child, index) => (
//                 <FolderTree
//                   key={index}
//                   data={child}
//                   onSelectFile={onSelectFile}
//                 />
//               ))}
//             </div>
//           )}
//         </div>
//       ) : (
//         <div
//           onClick={() => onSelectFile(data.name)}
//           style={{ cursor: "pointer", color: "blue" }}
//         >
//           📄 {data.name}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FolderTree;