import AnimatedCounter from "./AnimatedCounter";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      {/* ================================== */}
      {/* ADJUST THE CHART AND DETAILS SPACE */}
      {/* ================================== */}

      <div className="total-balance-chart">
        {/* Chart */}
        <div className=" sm:max-w-[150px] size-full max-w-[120px]">
          <DoughnutChart accounts={accounts} />
        </div>

        <div className="flex flex-col gap-6 ">
          <h2 className="header-2">Bank Accounts: {totalBanks}</h2>

          <div className="flex flex-col gap-2">
            <p className="total-balance-label">Total Current Balance</p>

            <div className="total-balance-amount  gap-2">
              <AnimatedCounter amount={totalCurrentBalance} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
