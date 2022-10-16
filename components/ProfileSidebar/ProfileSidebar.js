import React from "react";
import { Sidenav, Nav, Toggle, Notification } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import { HiBell, HiMenu } from "react-icons/hi";
import Link from "next/link";

const ProfileSidebar = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      } else {
        setExpanded(true);
      }
    });
  }

  
  return (
    <div
      // style={{ width: 360 }}
      className="lg:pl-5 rounded-xl  w-auto
      lg:relative absolute top-24 lg:top-0 left-0 z-50
      "
    >
      {/* <HiMenu
        onChange={setExpanded}
        onClick={() => setExpanded(!expanded)}
        className="text-3xl text-[#393486] cursor-pointer ml-2 "
      /> */}

      <HiMenu
        onChange={setExpanded}
        onClick={() => setExpanded(!expanded)}
        className="text-3xl text-[#393486] cursor-pointer ml-2 "
      />
      <Sidenav
        expanded={expanded}
        defaultOpenKeys={["3", "4"]}
        activeKey={activeKey}
        onSelect={setActiveKey}
        appearance="subtle"
        className="bg-[#F9FAFF] rounded-xl shadow-2xl"
      >
        {/* <Toggle
              onChange={setExpanded}
              checked={expanded}
              checkedChildren="Expand"
              unCheckedChildren="Collapse"
            />  */}
        {/* <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}> */}
        <Sidenav.Body className="z-50">
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="1" icon={<DashboardIcon />}>
              <Link href="/profile/individual/cv">
                <div className=" no-underline w-56 shadow-md h-20 p-3 border border-gray-300 rounded-xl  hover:bg-[#221F60] hover:text-gray-300">
                  <div className="text-base p-1 font-semibold hover:text-gray-300">
                    CV
                  </div>

                  <div className="text-sm pl-1  hover:text-gray-300">
                    0.00% Complete
                  </div>
                </div>
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="2" icon={<GroupIcon />}>
              <div className=" w-56 shadow-md h-20 p-3 border border-gray-300 rounded-xl hover:bg-[#221F60] hover:text-gray-300 ">
                <div className="text-base p-1 font-semibold hover:text-gray-300">
                  Following
                </div>

                <div className="text-sm pl-1  hover:text-gray-300">
                  The sellers you follow
                </div>
              </div>
            </Nav.Item>

            <Nav.Item eventKey="3" icon={<MagicIcon />}>
              <Link href="/profile/individual/ads">
                <div className=" w-56 shadow-md h-20 p-3 border border-gray-300 rounded-xl hover:bg-[#221F60] hover:text-gray-300 ">
                  <div className="text-base p-1 font-semibold hover:text-gray-300">
                    My Ads
                  </div>

                  <div className="text-sm pl-1  hover:text-gray-300">
                    Checked ads and more
                  </div>
                </div>
              </Link>
            </Nav.Item>

            <Nav.Item eventKey="4" icon={<GearCircleIcon />}>
              <Link href="/profile/individual/settings">
                <div className=" w-56 shadow-md h-20 p-3 border border-gray-300 rounded-xl hover:bg-[#221F60] hover:text-gray-300">
                  <div className="text-base p-1 font-semibold hover:text-gray-300">
                    Settings & Privacy
                  </div>

                  <div className="text-sm pl-1  hover:text-gray-300">
                    Manage your account
                  </div>
                </div>
              </Link>
            </Nav.Item>
            <Nav.Item eventKey="4-2">
              <div className=" w-56 shadow-md h-20 p-3 border border-gray-300 rounded-xl hover:bg-[#221F60] hover:text-gray-300 ">
                <div className="text-base p-1 font-semibold hover:text-gray-300">
                  Notifications
                </div>

                <div className="text-sm pl-1  hover:text-gray-300">
                  Stay up to date
                </div>
              </div>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
        <Sidenav.Toggle
          expanded={expanded}
          onToggle={(expanded) => setExpanded(expanded)}
        />
      </Sidenav>
    </div>
  );
};

export default ProfileSidebar;
