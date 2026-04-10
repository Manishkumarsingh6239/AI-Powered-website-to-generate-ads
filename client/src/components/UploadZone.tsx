import { UploadIcon, XIcon } from "lucide-react"
import type { UploadZoneProps } from "../types/UploadZoneProps"

const UploadZone = ({ label, file, onClear, onChange }: UploadZoneProps) => {
    return (
        <div className="relative group">
            <div className={`relative h-64 rounded-2x1 border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center bg-white/2 p-6 ${file ? 'border-violet-600/50 bg-violet-500/5' : 'border-white/10 hover:border-violet-500/30 hover:bg-white/5'}`}>
                {file ? (
                    <>
                        <img
                            src={URL.createObjectURL(file)}
                            className="absolute inset-0 w-full h-full object-cover z-0"
                        />

                        <button
                            onClick={onClear}
                            className="absolute inset-0 flex items-center justify-center z-20  text-white text-2xl"
                        >
                            <XIcon className="h-6 w-6 hover:bg-red-500/20 rounded-full  backdrop-brightness-80"/>
                        </button>

                        <div className="absolute bottom-0 left-0 right-0 z-30  p-2">
                            <p className="text-white text-sm break-all bg-black/70 p-2 rounded overflow-auto">
                                {file.name}
                            </p>
                        </div>
                    </>) : (
                    <>
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover: scale-110 transition-transform duration-300">
                            <UploadIcon className="w-8 h-8 text-gray-400 group-hover: transition-colors" />
                        </div>
                        <h3>{label}</h3>
                        <p className="max-w-md mx-auto text-sm text-gray-400 my-3">Drag & drop or click to upload</p>
                        <input type="file" accept="image/*" onChange={onChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                    </>
                )
                }

            </div>
        </div>
    )
}

export default UploadZone
