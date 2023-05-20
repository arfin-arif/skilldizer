import React from "react";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="mb-4 mx-8 border-b border-gray-200 dark:border-gray-700">
        <ul
          class="flex flex-wrap -mb-px text-sm font-medium text-center"
          id="myTab"
          data-tabs-toggle="#myTabContent"
          role="tablist"
        >
          <li className=" mr-2">
            <a
              className={
                "inline-block p-4 border-b-2 rounded-t-lg " +
                (openTab === 1
                  ? "text-orange-600 border-orange-300"
                  : "border-transparent")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              Profile
            </a>
          </li>
          <li className="mr-2">
            <a
              className={
                "inline-block p-4 border-b-2 rounded-t-lg " +
                (openTab === 2
                  ? "text-orange-600 border-orange-300"
                  : "border-transparent")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Settings
            </a>
          </li>
          <li className="mr-2">
            <a
              className={
                "inline-block p-4 border-b-2 rounded-t-lg " +
                (openTab === 3
                  ? "text-orange-600 border-orange-300"
                  : "border-transparent")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              Options
            </a>
          </li>
        </ul>
        <div className="bg-white rounded-lg py-4">
          <div id="myTabContent">
            <div className={openTab === 1 ? "block" : "hidden"} id="link1">
              <h2 className="py-2 text-2xl font-semibold font-sans">
                About the Tutor
              </h2>
              <p class="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{" "}
                <strong class="font-medium text-gray-800 dark:text-white">
                  Profile  associated content
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
            <div className={openTab === 2 ? "block" : "hidden"} id="link2">
              <p>
                Completely synergize resource taxing relationships via premier
                niche markets. Professionally cultivate one-to-one customer
                service with robust ideas.
                <br />
                <br />
                Dynamically innovate resource-leveling customer service for
                state of the art customer service.
              </p>
            </div>
            <div className={openTab === 3 ? "block" : "hidden"} id="link3">
              <p>
                Efficiently unleash cross-media information without cross-media
                value. Quickly maximize timely deliverables for real-time
                schemas.
                <br />
                <br /> Dramatically maintain clicks-and-mortar solutions without
                functional solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* NEW ENDS  */}
    </>
  );
};

export default Tabs;
