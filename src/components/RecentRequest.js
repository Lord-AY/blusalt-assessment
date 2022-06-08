export default function RecentRequest() {
  return (
    <div className="overflow-x-auto rounded-[10px] bg-white py-5 shadow-custom1">
      <p className="px-5 text-[18px] font-semibold text-[#171717]">
        Recent Requests
      </p>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="border-b border-[#F5F5F5]">
            <th className="px-5 py-3.5 text-left text-sm font-bold text-[#8392AB]">
              Name/Email
            </th>
            <th className="px-5 py-3.5 text-left text-sm font-bold text-[#8392AB]">
              Type
            </th>
            <th className="px-5 py-3.5 text-left text-sm font-bold text-[#8392AB]">
              Status
            </th>
            <th className="px-5 py-3.5 text-left text-sm font-bold text-[#8392AB]">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#F5F5F5]">
            <td className="py-4 px-5">
              <div className="flex flex-row items-center">
                <div className="mr-[17px] h-[36px] w-[36px] overflow-hidden rounded-lg">
                  <img src="/assets/images/team-2.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-[#141414]">
                    Michael Olu
                  </p>
                  <span className="text-sm text-[#8392AB]">
                    michael@mail.com
                  </span>
                </div>
              </div>
            </td>
            <td className="py-7 text-sm text-[#8392AB]">New Agent</td>
            <td className="py-4 px-5">
              <span className="flex h-6 w-16 items-center justify-center rounded-[100px] bg-customYellow/10 text-xs text-customYellow">
                Pending
              </span>
            </td>
            <td className="text-customPurple-100">23/04/18</td>
            <td className="py-4 px-5">
              <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#509FEF]/10">
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.19688 0.723875C1.43563 0.723875 1.67563 0.815125 1.85813 0.997624L6.21688 5.33512C6.39313 5.51137 6.49188 5.75012 6.49188 6.00012C6.49188 6.24887 6.39313 6.48763 6.21688 6.66388L1.85813 11.0039C1.49188 11.3689 0.899383 11.3689 0.533133 11.0014C0.168133 10.6339 0.169383 10.0401 0.535633 9.67512L4.22688 6.00012L0.535633 2.32512C0.169383 1.96012 0.168133 1.36763 0.533133 1.00013C0.715633 0.815125 0.956883 0.723875 1.19688 0.723875Z"
                    fill="#990D81"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#F5F5F5]">
            <td className="py-4 px-5">
              <div className="flex flex-row items-center">
                <div className="mr-[17px] h-[36px] w-[36px] overflow-hidden rounded-lg">
                  <img src="/assets/images/marie.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-[#141414]">
                    Chioma James
                  </p>
                  <span className="text-sm text-[#8392AB]">alexa@mail.com</span>
                </div>
              </div>
            </td>
            <td className="py-7 text-sm text-[#8392AB]">
              Account Deactivation
            </td>
            <td className="py-4 px-5">
              <span className="flex h-6 w-16 items-center justify-center rounded-[100px] bg-customYellow/10 text-xs text-customYellow">
                Pending
              </span>
            </td>
            <td className="text-[#8392AB]">23/12/20</td>
            <td className="py-4 px-5">
              <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#509FEF]/10">
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.19688 0.723875C1.43563 0.723875 1.67563 0.815125 1.85813 0.997624L6.21688 5.33512C6.39313 5.51137 6.49188 5.75012 6.49188 6.00012C6.49188 6.24887 6.39313 6.48763 6.21688 6.66388L1.85813 11.0039C1.49188 11.3689 0.899383 11.3689 0.533133 11.0014C0.168133 10.6339 0.169383 10.0401 0.535633 9.67512L4.22688 6.00012L0.535633 2.32512C0.169383 1.96012 0.168133 1.36763 0.533133 1.00013C0.715633 0.815125 0.956883 0.723875 1.19688 0.723875Z"
                    fill="rgba(153, 13, 129, 0.4)"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#F5F5F5]">
            <td className="py-4 px-5">
              <div className="flex flex-row items-center">
                <div className="mr-[17px] h-[36px] w-[36px] overflow-hidden rounded-lg">
                  <img src="/assets/images/kal-visuals-square.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-[#141414]">
                    Boluwatife Ade
                  </p>
                  <span className="text-sm text-[#8392AB]">laure@mail.com</span>
                </div>
              </div>
            </td>
            <td className="py-7 text-sm text-[#8392AB]">New User</td>
            <td className="py-4 px-5">
              <span className="flex h-6 w-16 items-center justify-center rounded-[100px] bg-customGreen-100/10 text-xs text-customGreen-100">
                Pending
              </span>
            </td>
            <td className="text-[#8392AB]">23/04/18</td>
            <td className="py-4 px-5">
              <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#509FEF]/10">
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.19688 0.723875C1.43563 0.723875 1.67563 0.815125 1.85813 0.997624L6.21688 5.33512C6.39313 5.51137 6.49188 5.75012 6.49188 6.00012C6.49188 6.24887 6.39313 6.48763 6.21688 6.66388L1.85813 11.0039C1.49188 11.3689 0.899383 11.3689 0.533133 11.0014C0.168133 10.6339 0.169383 10.0401 0.535633 9.67512L4.22688 6.00012L0.535633 2.32512C0.169383 1.96012 0.168133 1.36763 0.533133 1.00013C0.715633 0.815125 0.956883 0.723875 1.19688 0.723875Z"
                    fill="rgba(153, 13, 129, 0.4)"
                  />
                </svg>
              </div>
            </td>
          </tr>
          <tr className="border-b border-[#F5F5F5]">
            <td className="py-4 px-5">
              <div className="flex flex-row items-center">
                <div className="mr-[17px] h-[36px] w-[36px] overflow-hidden rounded-lg">
                  <img src="/assets/images/ivana-square.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-base font-semibold text-[#141414]">
                    Miriam Eric
                  </p>
                  <span className="text-sm text-[#8392AB]">
                    miriam@mail.com
                  </span>
                </div>
              </div>
            </td>
            <td className="py-7 text-sm text-[#8392AB]">Email Auth</td>
            <td className="py-4 px-5">
              <span className="flex h-6 w-16 items-center justify-center rounded-[100px] bg-customGreen-100/10 text-xs text-customGreen-100">
                Pending
              </span>
            </td>
            <td className="text-[#8392AB]">03/04/21</td>
            <td className="py-4 px-5">
              <div className="flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#509FEF]/10">
                <svg
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.19688 0.723875C1.43563 0.723875 1.67563 0.815125 1.85813 0.997624L6.21688 5.33512C6.39313 5.51137 6.49188 5.75012 6.49188 6.00012C6.49188 6.24887 6.39313 6.48763 6.21688 6.66388L1.85813 11.0039C1.49188 11.3689 0.899383 11.3689 0.533133 11.0014C0.168133 10.6339 0.169383 10.0401 0.535633 9.67512L4.22688 6.00012L0.535633 2.32512C0.169383 1.96012 0.168133 1.36763 0.533133 1.00013C0.715633 0.815125 0.956883 0.723875 1.19688 0.723875Z"
                    fill="rgba(153, 13, 129, 0.4)"
                  />
                </svg>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
