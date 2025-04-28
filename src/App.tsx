import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

function App() {
  const address = useAddress();

  if (!address) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-green-300 p-6">
        <div className="card w-full max-w-md shadow-xl bg-base-100">
          <div className="card-body items-center text-center">
            <h1 className="text-4xl font-bold mb-4 text-primary">Health Wallet 🌿</h1>
            <p className="text-gray-500 mb-6">Earn rewards for healthy living</p>
            <ConnectWallet
              btnTitle="Sign In / Create Wallet"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <div className="card w-full max-w-md shadow-xl bg-base-100">
        <div className="card-body items-center text-center">
          <h1 className="text-3xl font-bold mb-2 text-primary">Your Wallet</h1>
          <p className="text-gray-700 mb-4 break-all">
            {address}
          </p>
          <button
            className="btn btn-outline btn-error"
            onClick={() => window.location.reload()}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;