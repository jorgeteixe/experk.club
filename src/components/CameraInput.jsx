import { useState } from 'react'

export default function CameraInput() {
  const [imageSrc, setImageSrc] = useState('')

  function handleImageChange(event) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImageSrc(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  return (
    <>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        id="cameraInput"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      <button onClick={() => document.getElementById('cameraInput').click()}>
        Take Picture or Upload
      </button>
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Uploaded Image"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
    </>
  )
}
