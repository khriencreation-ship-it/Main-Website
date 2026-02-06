"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <button data-cal-namespace="15min"
            data-cal-link="khrien-s5snrb/15min"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
            className="text-lg lg:text-xl font-bold whitespace-nowrap border-5 rounded-full border-r border-t border-black bg-brandGreen px-5 lg:px-10 py-2 lg:py-3 hover:bg-brandPurple hover:text-white transition-all duration-400 ease-in-out"
        >Schedule a meeting</button>
    );
};