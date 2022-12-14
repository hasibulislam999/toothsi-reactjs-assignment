import React from "react";
import LeftFilter from "./LeftFilter";
import RightFilter from "./RightFilter";

const Filter = ({ setKeyword, setFilter, selectMultipleProducts }) => {
  return (
    <section className="shadow-lg py-4 lg:px-0 px-4">
      <div className="flex lg:flex-row md:flex-row flex-col lg:gap-y-0 md:gap-y-0 gap-y-4 justify-between items-center container mx-auto">
        {/* header left */}
        <LeftFilter setFilter={setFilter} />

        {/* header right */}
        <RightFilter
          setKeyword={setKeyword}
          selectMultipleProducts={selectMultipleProducts}
        />
      </div>
    </section>
  );
};
export default Filter;
