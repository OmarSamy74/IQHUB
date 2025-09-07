"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
const Price = dynamic(() => import("@/components/price"), { ssr: false });
const T = dynamic(() => import("@/components/T"), { ssr: false });

export default function PaymentPage() {
  const [courseId, setCourseId] = useState<string | null>(null);
  
  useEffect(() => {
    // Get courseId from URL params on client side
    const urlParams = new URLSearchParams(window.location.search);
    setCourseId(urlParams.get('courseId'));
  }, []);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCardInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCardData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to success page
      window.location.href = '/payment-success';
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            💳 <T k="secure_payment" />
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Complete your enrollment with our secure payment system
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-8 animate-slide-up">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6"><T k="order_summary" /></h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Image 
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center" 
                    alt="Course" 
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Sports Medicine</h4>
                    <p className="text-sm text-gray-600">Master&apos;s Degree Program</p>
                    <p className="text-sm text-gray-600">Duration: 12 months</p>
                  </div>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Course Fee:</span>
                    <span className="font-semibold">€8,500.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Platform Fee:</span>
                    <span className="font-semibold">€0.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (VAT):</span>
                    <span className="font-semibold">€0.00</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span><T k="total" />:</span>
                      <span className="text-blue-600"><Price amount={8500} /></span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">🎉 What You Get:</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>✅ Lifetime access to course materials</li>
                    <li>✅ 24/7 AI-powered learning platform</li>
                    <li>✅ Live expert mentorship sessions</li>
                    <li>✅ Blockchain-verified certificate</li>
                    <li>✅ Global alumni network access</li>
                    <li>✅ 30-day money-back guarantee</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 animate-slide-up-delay">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Payment Information</h2>
              
              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Choose Payment Method</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                      paymentMethod === 'card' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-2xl mb-2">💳</div>
                    <div className="font-semibold">Credit/Debit Card</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                      paymentMethod === 'paypal' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-2xl mb-2">🅿️</div>
                    <div className="font-semibold">PayPal</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('crypto')}
                    className={`p-4 border-2 rounded-lg text-center transition-all duration-300 ${
                      paymentMethod === 'crypto' 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="text-2xl mb-2">₿</div>
                    <div className="font-semibold">Cryptocurrency</div>
                  </button>
                </div>
              </div>

              {/* Payment Form */}
              {paymentMethod === 'card' && (
                <form onSubmit={handlePayment} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={cardData.cardName}
                      onChange={handleCardInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={cardData.cardNumber}
                      onChange={handleCardInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={cardData.expiryDate}
                        onChange={handleCardInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="MM/YY"
                        maxLength={5}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleCardInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="123"
                        maxLength={4}
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-blue-800">
                      <span className="text-xl">🔒</span>
                      <span className="font-semibold">Secure Payment</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Your payment information is encrypted and secure. We use industry-standard SSL encryption.
                    </p>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          Processing Payment...
                        </div>
                      ) : (
                        <>💳 Pay <Price amount={8500} /> Now</>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🅿️</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">PayPal Payment</h3>
                  <p className="text-gray-600 mb-6">You will be redirected to PayPal to complete your payment securely.</p>
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Continue with PayPal
                  </button>
                </div>
              )}

              {paymentMethod === 'crypto' && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">₿</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Cryptocurrency Payment</h3>
                  <p className="text-gray-600 mb-6">Pay with Bitcoin, Ethereum, or other supported cryptocurrencies.</p>
                  <div className="bg-gray-100 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-600 mb-2">Bitcoin Address:</p>
                    <p className="font-mono text-sm break-all">1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa</p>
                  </div>
                  <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Generate Payment Address
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
