import React, { useState } from "react";

import {
  FiUser,
  FiShield,
  FiBell,
  FiSun,
  FiLock,
  FiCreditCard,
  FiHeadphones,
  FiLogOut,
  FiEdit2,
  FiCamera,
  FiChevronRight,
  FiCheckCircle,
} from "react-icons/fi";

function Profile() {
  const [activeTab, setActiveTab] = useState("Account Overview");

  const [emailNotification, setEmailNotification] = useState(true);
  const [orderNotification, setOrderNotification] = useState(true);
  const [promoNotification, setPromoNotification] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      // ACCOUNT OVERVIEW

      case "Account Overview":
        return (
          <>
            <div className="bg-green-50 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome back, Md. Kawsar Ali!
              </h2>

              <p className="text-gray-600 mt-1">
                Manage your account and personal settings.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Personal Information</h3>

                <span className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
                  <FiCheckCircle />
                  Active
                </span>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <span className="text-gray-500">Full Name</span>
                  <span className="font-medium">Md. Kawsar Ali</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <span className="text-gray-500">Email Address</span>
                  <span className="font-medium break-all">
                    kawsaralio1996@gmail.com
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <span className="text-gray-500">Phone Number</span>
                  <span className="font-medium">Not added</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <span className="text-gray-500">Location</span>
                  <span className="font-medium">Not added</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
              <div
                onClick={() => setActiveTab("Security")}
                className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <FiShield className="text-green-600" />
                    Account Security
                  </h3>

                  <FiChevronRight />
                </div>

                <p className="text-gray-500 text-sm">
                  Manage your password and account security.
                </p>
              </div>

              <div
                onClick={() => setActiveTab("Notifications")}
                className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-md transition"
              >
                <div className="flex justify-between items-center mb-5">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <FiBell className="text-green-600" />
                    Notifications
                  </h3>

                  <FiChevronRight />
                </div>

                <p className="text-gray-500 text-sm">
                  Manage your notification preferences.
                </p>
              </div>
            </div>
          </>
        );

      // PERSONAL INFORMATION

      case "Personal Information":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Personal Information
            </h2>

            <div className="space-y-6">
              <div>
                <label className="text-sm text-gray-500">Full Name</label>

                <input
                  type="text"
                  defaultValue="Md. Kawsar Ali"
                  className="w-full border border-gray-200 rounded-lg p-3 mt-2 outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Email Address</label>

                <input
                  type="email"
                  defaultValue="kawsaralio1996@gmail.com"
                  className="w-full border border-gray-200 rounded-lg p-3 mt-2 outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Phone Number</label>

                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border border-gray-200 rounded-lg p-3 mt-2 outline-none focus:border-green-500"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Address</label>

                <input
                  type="text"
                  placeholder="Enter your address"
                  className="w-full border border-gray-200 rounded-lg p-3 mt-2 outline-none focus:border-green-500"
                />
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        );

      // SECURITY

      case "Security":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 border-b border-gray-200 pb-6">
                <div>
                  <h3 className="font-medium">Password</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Change your account password.
                  </p>
                </div>

                <button className="text-green-600 font-medium cursor-pointer">
                  Change Password
                </button>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                <div>
                  <h3 className="font-medium">Two-Factor Authentication</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Add an extra layer of security.
                  </p>
                </div>

                <button className="text-green-600 font-medium cursor-pointer">
                  Enable
                </button>
              </div>
            </div>
          </div>
        );

      // NOTIFICATIONS

      case "Notifications":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Notification Settings
            </h2>

            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                <div>
                  <h3 className="font-medium">Email Notifications</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Receive notifications through email.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={emailNotification}
                  onChange={(e) => setEmailNotification(e.target.checked)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />
              </div>

              <div className="flex justify-between items-center border-b border-gray-200 pb-5">
                <div>
                  <h3 className="font-medium">Order Updates</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Receive updates about your orders.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={orderNotification}
                  onChange={(e) => setOrderNotification(e.target.checked)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Promotional Offers</h3>

                  <p className="text-sm text-gray-500 mt-1">
                    Receive promotional emails and offers.
                  </p>
                </div>

                <input
                  type="checkbox"
                  checked={promoNotification}
                  onChange={(e) => setPromoNotification(e.target.checked)}
                  className="w-5 h-5 accent-green-600 cursor-pointer"
                />
              </div>
            </div>
          </div>
        );

      // APPEARANCE

      case "Appearance":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Appearance Settings</h2>

            <h3 className="font-medium mb-4">Choose your theme</h3>

            <div className="flex flex-wrap gap-4">
              <button className="border-2 border-green-600 rounded-xl p-5 w-36 cursor-pointer">
                <div className="bg-white border border-gray-200 h-16 rounded-lg mb-3"></div>
                <span className="font-medium">Light</span>
              </button>

              <button className="border border-gray-200 rounded-xl p-5 w-36 cursor-pointer">
                <div className="bg-gray-900 h-16 rounded-lg mb-3"></div>
                <span className="font-medium">Dark</span>
              </button>
            </div>
          </div>
        );

      // PRIVACY

      case "Privacy":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Privacy Settings</h2>

            <div className="space-y-5">
              <div className="border-b border-gray-200 pb-5">
                <h3 className="font-medium">Profile Visibility</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Control who can see your profile information.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-5">
                <h3 className="font-medium">Personal Data</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your personal account information.
                </p>
              </div>

              <button className="text-red-500 font-medium cursor-pointer">
                Delete Account
              </button>
            </div>
          </div>
        );

      // BILLING

      case "Billing & Plans":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Billing & Plans</h2>

            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-semibold text-lg">Current Plan</h3>

              <p className="text-gray-600 mt-2">Free Plan</p>

              <span className="text-green-600 text-sm">Active</span>
            </div>

            <button className="mt-6 border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 cursor-pointer">
              View Plans
            </button>
          </div>
        );

      // HELP & SUPPORT

      case "Help & Support":
        return (
          <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>

            <div className="space-y-5">
              <div>
                <h3 className="font-medium">Frequently Asked Questions</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Find answers to common questions.
                </p>
              </div>

              <div>
                <h3 className="font-medium">Contact Support</h3>

                <p className="text-sm text-gray-500 mt-1">
                  Get help from our support team.
                </p>
              </div>

              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 cursor-pointer">
                Contact Us
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        {/* LEFT SIDEBAR */}

        <aside className="bg-white border border-gray-200 rounded-2xl overflow-hidden h-fit">
          {/* PROFILE */}

          <div className="flex flex-col items-center p-8 border-b border-gray-200">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-36 h-36 rounded-full object-cover border-4 border-green-100"
              />

              <button className="absolute bottom-1 right-1 bg-green-600 text-white p-2.5 rounded-full border-4 border-white cursor-pointer hover:bg-green-700">
                <FiCamera />
              </button>
            </div>

            <h2 className="text-xl font-semibold mt-5">Md. Kawsar Ali</h2>

            <p className="text-sm text-gray-500 mt-1 break-all text-center">
              kawsaralio1996@gmail.com
            </p>
          </div>

          {/* SIDEBAR MENU */}

          <div className="p-5 space-y-2">
            <button
              onClick={() => setActiveTab("Account Overview")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Account Overview"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiUser className="text-xl" />
              Account Overview
            </button>

            <button
              onClick={() => setActiveTab("Personal Information")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Personal Information"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiUser className="text-xl" />
              Personal Information
            </button>

            <button
              onClick={() => setActiveTab("Security")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Security"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiShield className="text-xl" />
              Security
            </button>

            <button
              onClick={() => setActiveTab("Notifications")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Notifications"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiBell className="text-xl" />
              Notifications
            </button>

            <button
              onClick={() => setActiveTab("Appearance")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Appearance"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiSun className="text-xl" />
              Appearance
            </button>

            <button
              onClick={() => setActiveTab("Privacy")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Privacy"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiLock className="text-xl" />
              Privacy
            </button>

            <button
              onClick={() => setActiveTab("Billing & Plans")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Billing & Plans"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiCreditCard className="text-xl" />
              Billing & Plans
            </button>

            <button
              onClick={() => setActiveTab("Help & Support")}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg text-left cursor-pointer ${
                activeTab === "Help & Support"
                  ? "bg-green-50 text-green-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <FiHeadphones className="text-xl" />
              Help & Support
            </button>

            {/* LOGOUT */}

            <div className="pt-4">
              <button className="w-full flex items-center justify-center gap-3 border border-green-200 text-green-600 rounded-lg py-3 hover:bg-green-50 cursor-pointer">
                <FiLogOut />
                Logout
              </button>
            </div>
          </div>
        </aside>

        {/* RIGHT CONTENT */}

        <main className="bg-white border border-gray-200 rounded-2xl p-5 md:p-8">
          {/* HEADER */}

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6 mb-7">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                {activeTab}
              </h1>

              <p className="text-gray-500 mt-2">
                Manage your account information and preferences.
              </p>
            </div>

            <button
              onClick={() => setActiveTab("Personal Information")}
              className="flex items-center justify-center gap-2 border border-green-600 text-green-600 px-5 py-3 rounded-lg hover:bg-green-50 transition cursor-pointer"
            >
              <FiEdit2 />
              Edit Profile
            </button>
          </div>

          {/* DYNAMIC CONTENT */}

          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default Profile;
