import { Dialog, Tab } from '@headlessui/react';
import { X, DollarSign, Calendar, Tag } from 'lucide-react';
import { useState } from 'react';

interface AddFlowModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export function AddFlowModal({ isOpen, onClose, isDark }: AddFlowModalProps) {
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        aria-hidden="true"
      />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={`w-full max-w-md rounded-lg shadow-xl ${
            isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
          }`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
            <Dialog.Title className="text-lg font-semibold">
              Add New Flow
            </Dialog.Title>
            <button
              onClick={onClose}
              className={`p-1 rounded-full hover:bg-gray-100 ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 border-b border-gray-200 dark:border-gray-700">
              {({ selected }) => (
                <>
                  <Tab
                    className={`w-full py-3 text-sm font-medium leading-5 transition-colors duration-200 ${
                      selected
                        ? 'text-red-500 border-b-2 border-red-500'
                        : isDark
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    }`}
                  >
                    Expenses
                  </Tab>
                  <Tab
                    className={`w-full py-3 text-sm font-medium leading-5 transition-colors duration-200 ${
                      selected
                        ? 'text-green-500 border-b-2 border-green-500'
                        : isDark
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    }`}
                  >
                    Income
                  </Tab>
                </>
              )}
            </Tab.List>

            <Tab.Panels className="p-6">
              <Tab.Panel>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={`pl-10 w-full rounded-lg border ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`pl-10 w-full rounded-lg border ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Category
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={`pl-10 w-full rounded-lg border ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      >
                        <option value="">Select category</option>
                        <option value="food">Food & Dining</option>
                        <option value="transport">Transportation</option>
                        <option value="utilities">Utilities</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="shopping">Shopping</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-lg text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#220041' }}
                  >
                    Add Expense
                  </button>
                </form>
              </Tab.Panel>

              <Tab.Panel>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Amount
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className={`pl-10 w-full rounded-lg border ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={`pl-10 w-full rounded-lg border ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-1 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      Category
                    </label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={`pl-10 w-full rounded-lg border ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white'
                            : 'bg-white border-gray-300 text-gray-900'
                        } focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                      >
                        <option value="">Select category</option>
                        <option value="salary">Salary</option>
                        <option value="freelance">Freelance</option>
                        <option value="investments">Investments</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 rounded-lg text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: '#220041' }}
                  >
                    Add Income
                  </button>
                </form>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
