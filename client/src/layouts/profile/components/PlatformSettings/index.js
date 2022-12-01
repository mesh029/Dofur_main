/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

const PlatformSettings = props => {
  const [followsMe, setFollowsMe] = useState(true);
  return (
    <Card>
      <SoftBox pt={2} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          platform settings
        </SoftTypography>
      </SoftBox>
      <SoftBox pt={1.5} pb={2} px={2} lineHeight={1.25}>
        <SoftTypography variant="caption" fontWeight="bold" color="text" textTransform="uppercase">
          account
        </SoftTypography>
        <SoftBox display="flex" py={1} mb={0.25}>

          <SoftBox width="80%" ml={2}>
            {props.userType == "donor" ? (
              <>
              <SoftBox mt={0.25}>
              <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
            </SoftBox>
                        <SoftTypography variant="button" fontWeight="regular" color="text">
                        Email me when policies are updated
                      </SoftTypography>

                      </>


            ):props.userType == "recipient" ?(
              <>
              <SoftBox mt={0.25}>
              <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
            </SoftBox>
                        <SoftTypography variant="button" fontWeight="regular" color="text">
                        Email me when my target funds are reached
                      </SoftTypography>

                      </>
            ):(
              <>
              <SoftBox mt={0.25}>
              <Switch checked={followsMe} onChange={() => setFollowsMe(!followsMe)} />
            </SoftBox>
                        <SoftTypography variant="button" fontWeight="regular" color="text">
                        Email me when there is a new recipient
                      </SoftTypography>

                      </>

            )}

          </SoftBox>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default PlatformSettings;
