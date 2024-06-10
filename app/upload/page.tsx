
'use client'

import { CldUploadWidget, CldImage } from "next-cloudinary"
import { useState } from "react"


interface cloudinaryResult {
  public_id: string
}


const UploadPage = () => {

const [publicId, setPublicId] = useState('')

  return (
    <>
    {publicId && <CldImage src={publicId} width={270} height={180} alt="a coffee image"/>}
    <CldUploadWidget 
    uploadPreset='nlnuimoz'
    options={{
      sources: ['local'],
      multiple: false,
      maxFiles: 1,
      styles: {
        palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1"
        }
      }
    }}
    onUpload={(result, widget) => {
      if (result.event !== 'success') return
      const info = result.info as cloudinaryResult
      setPublicId(info.public_id)
      
    }}
    >
      {( {open} ) => 
        <button 
          className="btn btn-primary"
          onClick={()=>open()}
        >
          Upload
        </button>}
    </CldUploadWidget>
  </>
  )
}
export default UploadPage


