import QrScanner from 'react-qr-scanner'

export default function CameraScanner() {
  const handleScan = (data) => {
    if (data) {
      alert(data);
    }
  }

  const handleError = (err) => {
    console.error(err);
  }

  return (
    <div>
      <QrScanner
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
    </div>
  );
}
