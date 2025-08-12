import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-[1152px] px-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
            Welcome to ShopHub
          </h1>
          <p className="text-lg text-center text-gray-600">
            Your one-stop destination for all your shopping needs
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
