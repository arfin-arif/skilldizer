import React, { useEffect, useState } from "react";
import { openAlert } from "../../../../store/reducer/alertReducer";
import { clearSuccess } from "../../../../store/reducer/userReducer";
import { useDispatch } from "react-redux";
import axios from "axios";

const Notification = () => {
  const dispatch = useDispatch();

  const [savedChecked, setSavedChecked] = useState(null);
  const [generalChecked, setGeneralChecked] = useState(true);
  const [updatesChecked, setUpdatesChecked] = useState(true);
  const [blogChecked, setBlogChecked] = useState(false);
  const [qaChecked, setQAChecked] = useState(false);
  const [tutoringChecked, setTutoringChecked] = useState(true);
  const [classesChecked, setClassesChecked] = useState(true);
  const [insightsChecked, setInsightsChecked] = useState(true);
  const [adsChecked, setAdsChecked] = useState(true);
  const [increasePriceChecked, setIncreasePriceChecked] = useState(true);

  useEffect(() => {
    if (savedChecked === null) {
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_API}/api/v1/notification/get-notifications`,

          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          if (res.data.data.notifications) {
            setSavedChecked(res.data.data.notifications);
            setGeneralChecked(res.data.data?.notifications?.generalChecked);
            setUpdatesChecked(res.data.data?.notifications?.updatesChecked);
            setBlogChecked(res.data.data?.notifications?.blogChecked);
            setQAChecked(res.data.data?.notifications?.qaChecked);
            setTutoringChecked(res.data.data?.notifications?.tutoringChecked);
            setClassesChecked(res.data.data?.notifications?.classesChecked);
            setInsightsChecked(res.data.data?.notifications?.insightsChecked);
            setAdsChecked(res.data.data?.notifications?.adsChecked);
            setIncreasePriceChecked(
              res.data.data?.notifications?.increasePriceChecked
            );
          }
        });
    }
  }, [savedChecked]);

  const handleSubmit = () => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_API}/api/v1/notification/update-notifications`,
        {
          generalChecked,
          updatesChecked,
          blogChecked,
          qaChecked,
          tutoringChecked,
          classesChecked,
          insightsChecked,
          adsChecked,
          increasePriceChecked,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        dispatch(
          openAlert({ severity: "success", message: res.data.data.message })
        );
        dispatch(clearSuccess());
      })
      .catch((err) => {
        dispatch(
          openAlert({
            severity: "error",
            message: err?.response?.data?.message,
          })
        );
        dispatch(clearSuccess());
      });
  };
  return (
    <section className="w-[55rem] bg-[#fff] ml-6 my-6 ">
      <div className="py-4 px-10 border-b">
        <h1 className="main-heading">Notification Center</h1>
      </div>

      <div className="px-10 space-y-4 my-4">
        <h2 className="sub-heading-16">Email Notification</h2>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={classesChecked}
              onChange={(e) => setClassesChecked(e.target.checked)}
              type="checkbox"
              className="mt-2 cursor-pointer scale-[1] accent-[#FF5A00]  appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">
              Class and messages
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Alerts about new classes, new requests and student messages.
          </h2>
        </div>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={generalChecked}
              onChange={(e) => setGeneralChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">
              General reminders
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Notifications about pending requests, new classes, reviews and
            payments.
          </h2>
        </div>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={updatesChecked}
              onChange={(e) => setUpdatesChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">
              Updates, tips and offers
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Stay connected with product updates, helpful tips and special offers
          </h2>
        </div>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={blogChecked}
              onChange={(e) => setBlogChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">
              Skilldizer Blog
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Occasional newsletter with the latest posts.
          </h2>
        </div>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={qaChecked}
              onChange={(e) => setQAChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">Q&A section</h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Notices about new questions and replies to your comments.
          </h2>
        </div>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={tutoringChecked}
              onChange={(e) => setTutoringChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">
              New tutoring opportunities
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Daily announcements of new student postings for your subjects.
          </h2>
        </div>

        {/* // * Email Notifications */}
        <h2 className="sub-heading-16 pt-8">Email Notification</h2>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={classesChecked}
              onChange={(e) => setClassesChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] font-[400] text-[#000000] ">
              Classes and messages
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            SMS alerts about new requests, trial class bookings and upcoming
            trial classs.
          </h2>
        </div>
        <h2 className="sub-heading-16 pt-4">Skilldizer insights</h2>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={insightsChecked}
              onChange={(e) => setInsightsChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] text-[#000000] ">
              Allow Skilldizer team to contact me for product improvements
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            Product improvements, research and beta testing
          </h2>
        </div>

        {/* // * Profile Promotion */}
        <h2 className="sub-heading-16 pt-8">Profile Promotion</h2>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={adsChecked}
              onChange={(e) => setAdsChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] text-[#000000] ">
              Allow Skilldizer to promote details from my tutor profile in ads
            </h3>
          </span>
          <h2 className="text-[16px] px-8 text-[#808080]">
            To help you reach more students, skilldizer can promote your profile
            photo, video and/or other publicly available details from your tutor
            profile in advertisements. To learn more,
            <span className="text-[#257CFF] hover:underline">read our FAQ</span>
          </h2>
        </div>
        <div className="">
          <span className="flex gap-4 items-center">
            <input
              checked={increasePriceChecked}
              onChange={(e) => setIncreasePriceChecked(e.target.checked)}
              type="checkbox"
              className="mt-2cursor-pointer scale-[1] appearance-none checked:bg-[#FF5A00] checked:border-transparent active:ring-2 active:ring-[#FF5A00] active:outline-none focus:ring-2 focus:ring-[#FF5A00] focus:outline-none  accent-[#FF5A00]"
            />
            <h3 className="text-[16px] text-[#000000] ">
              Allow Skilldizer to automatically increase your price
            </h3>
          </span>
          <h2 className="text-[16px] px-8  text-[#808080]">
            To increase your earnings, we’ll automatically increase your price
            in search results for certain groups of new students
          </h2>
        </div>
      </div>
      <div className="px-10 border-b"></div>
      <div className="px-10  py-4">
        <button className="form-btn-save" type="submit" onClick={handleSubmit}>
          Save Settings
        </button>
      </div>
    </section>
  );
};

export default Notification;
