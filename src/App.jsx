import OtpLogin from './components/OtpLogin'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center font-bold text-2xl text-gray-800">
          Login with Phone
        </h1>
       
        <OtpLogin />
      </div>
    </div>
  );
}

export default App;
