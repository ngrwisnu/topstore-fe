import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../../components/group/Navbar";
import TopUpForm from "../../components/group/TopUpForm/TopUpForm";
import TopUpItem from "../../components/group/TopUpItem/TopUpItem";
import { GameItemTypes } from "../../helpers/data-types";
import { getVoucherFeature } from "../../helpers/player";

const initialValue = {
  name: "",
  thumbnail: "",
  category: {
    name: "",
  },
};

const DetailPage = () => {
  const [voucherDetails, setVoucherDetails] = useState<any>(initialValue);
  const router = useRouter();

  const getVoucherDetails = useCallback(
    async (id: any) => {
      const data = await getVoucherFeature(id);
      setVoucherDetails(data);
    },
    [getVoucherFeature]
  );

  useEffect(() => {
    if (router.isReady) {
      getVoucherDetails(router.query.id);
    } else {
      console.log("Route is not ready");
    }
  }, [router.isReady]);

  return (
    // <!-- Detail Content -->
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem data={voucherDetails.data} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              {/* <!-- Desktop: Game title --> */}
              <TopUpItem data={voucherDetails.data} type="desktop" />
              <hr />
              <TopUpForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPage;
