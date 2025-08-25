// import { getWidgetDetails } from "./widgetFunctions";
// import { APP_URL } from "../lib/constants";

let APP_URL = "http://localhost:3000/"
// let APP_URL = "https://cdnb.propel.ly/"
let API_URL="https://apib.propel.ly/v1.0/"

 const getWidgetDetails = async (widgetId) => {
  console.log("hello 123")
  try {
    const response = await fetch(`${API_URL}widget/${widgetId}`);

    if (!response.ok) {
      return false;
    }

    const data = await response.json();

    if (!data) {
      return false;
    }

    const totalRecords = data?.result?.data?.pagination?.records?.total;
    if (totalRecords <= 0) {
      return false;
    }

    console.log("data", data);

    return data;
    return {
      result:{
       
    "success": true,
    "data": {
        "widgets": [
            {
                "id": "a54oZnML",
                "name": "test-18-8",
                "domain_name": "http://localhost:3010",
                "details": {
                    "css": {
                        "mobile": "position:fixed,left:20px,top:60%,transform:translateY(-50%),z-index:99",
                        "desktop": "position:fixed,left:20px,top:30%,transform:translateY(-50%),z-index:99"
                    },
                    "type": "floating",
                    "layout": "floating",
                    "container_id": "E9vWGOmx-a54oZnML",
                    "layout_style": "left",
                    "google_url_handle": null
                },
                "rating_filter": {
                    "value": "3",
                    "symbol": ">="
                },
                "order_filter": "desc",
                "exclude_non_text_reviews": false,
                "show_recent_popup": false,
                "show_branding": false,
                "include_feedback": false,
                "review_sources": [
                    {
                        "reviewsource_id": "dXELOan1",
                        "platform": "feedback",
                        "logo": "https://apicdnb.propel.ly/storage/media/logos/platforms/propel-very-small-logo.png",
                        "url": "http://localhost:3010",
                        "average_rating": 0,
                        "review_count": 0,
                        "details": {
                            "account_id": "http://localhost:3010"
                        }
                    },
                    {
                        "reviewsource_id": "BX4KPenQ",
                        "platform": "googlemaps",
                        "logo": "https://apicdnb.propel.ly/storage/media/logos/platforms/google.png",
                        "url": "https://maps.google.com/?cid=2246516254323608697&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAAYBCAA",
                        "average_rating": 1,
                        "review_count": 1,
                        "details": {
                            "name": "Best Car Service In Surat",
                            "account_id": "ChIJbencXxBP4DsReYwZeaE6LR8",
                            "auxiliary_details": {
                                "id": "ChIJbencXxBP4DsReYwZeaE6LR8",
                                "url": "https://maps.google.com/?cid=2246516254323608697&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAAYBCAA",
                                "name": "Best Car Service In Surat",
                                "rating": {
                                    "count": 1,
                                    "average": 1
                                },
                                "address": {
                                    "city": "Surat",
                                    "state": "Gujarat",
                                    "address": "New Pushpakunj Society, Katargam, Surat, Gujarat 395004, India",
                                    "country": "India",
                                    "zipcode": "395004",
                                    "location": {
                                        "lat": 21.2212192,
                                        "lng": 72.8382494
                                    }
                                },
                                "website_url": null
                            }
                        }
                    }
                ],
                "created_at": "2025-08-18T05:53:18",
                "updated_at": "2025-08-18T06:50:18"
            }
        ]
    }
}
    };
  } catch (error) {
    return false;
  }
};

class Widget {
  /*Get all the params from the script tag and assign to the class variable*/
  constructor() {
    this.companyId = document.currentScript.getAttribute("company-id");
    this.widgetId = document.currentScript.getAttribute("widget-id");
    this.init();
  }
  async init() {
    try {
      if (!this.widgetId || this.widgetId === null || this.widgetId === undefined) {
        console.log(" 106 atlas version 1.0.38");

        document.addEventListener("DOMContentLoaded", async () => {       

          let googleReviewApps = document.querySelectorAll("div.rs-app");
          console.log(" 108 googleReviewApps ", googleReviewApps);

          if (googleReviewApps.length) {
            let selecterApp = googleReviewApps[0];
            console.log(" 110 selecterApp ", selecterApp);

            let appId = selecterApp.getAttribute("app-id");
            console.log(" 113 appId ", appId);

            let companyId = selecterApp.getAttribute("company-id");
            console.log(" 116 companyid ", companyId);

            let val = await getWidgetDetails(appId);
            let { type, layout_style, layout, container_id, css } = val?.result?.data?.widgets[0]?.details;
            let showPopup = val?.result?.data?.widgets[0]?.show_recent_popup;

            let containerBody = document.createElement("div");
            containerBody.setAttribute("class", container_id);
            const elements = document.getElementsByClassName(container_id);
            if (elements.length == 0) {
              document.body.append(containerBody);
              let script = document.createElement("script");
              let popupscript = document.createElement("script");

              switch (type) {
                case "floating":
                  if (layout_style == "top") {
                    script.src = APP_URL + "widgets/horizontal_widget.js";
                    script.setAttribute("position", layout_style);
                  }
                  if (layout_style == "bottom") {
                    script.src = APP_URL + "widgets/horizontal_widget.js";
                    script.setAttribute("position", layout_style);
                  }
                  if (layout_style == "left") {
                    script.src = APP_URL + "widgets/floating_bar.js";
                    script.setAttribute("position", layout_style);
                  }
                  if (layout_style == "right") {
                    script.src = APP_URL + "widgets/floating_bar.js";
                    script.setAttribute("position", layout_style);
                  }
                  break;
                case "badge":
                  if (layout_style == "badge") {
                    script.src = APP_URL + "widgets/badge.js";
                  }
                  if (layout_style == "badge_monochromatic_fill") {
                    script.src = APP_URL + "widgets/badge_monochromatic_fill.js";
                  }
                  if (css == "display-block" && type == "badge") {
                    script.src = APP_URL + "widgets/badge_monochromatic_fill.js";
                    layout_style = "badge_monochromatic_fill";
                    container_id = `${companyId}-${appId}`;
                  }
                  break;
                case "button":
                  script.src = APP_URL + "widgets/button.js";
                  break;
                case "slider":
                  script.src = APP_URL + "widgets/slider_widget.js";
                  break;
                case "carousel":
                  script.src = APP_URL + "widgets/carousel.js";
                  break;
              }

              if (!!showPopup) {
                popupscript.src = APP_URL + "widgets/bottom_widget.js";
                popupscript.setAttribute("company-id", this.companyId);
                popupscript.setAttribute("layout-style", layout_style);
                popupscript.setAttribute("container-id", container_id);
                popupscript.setAttribute("widget-id", this.widgetId);
                if (css?.desktop) {
                  popupscript.setAttribute("field-desktop-css", css?.desktop);
                  popupscript.setAttribute("field-mobile-css", css?.mobile);
                }
                popupscript.async = true;
              }

              script.setAttribute("company-id", companyId);
              script.setAttribute("layout-style", layout_style);
              script.setAttribute("container-id", container_id);
              script.setAttribute("widget-id", appId);
              if (css?.desktop) {
                script.setAttribute("field-desktop-css", css.desktop);
                script.setAttribute("field-mobile-css", css.mobile);
              }
              script.async = true;

              document.body.appendChild(script);
              document.body.appendChild(popupscript);
            }
          }
        });
      } else {
        if (this.widgetId || this.widgetId !== null || this.widgetId !== undefined) {
          console.log("widget version 1.0.38");
          let val = await getWidgetDetails(this.widgetId);
          console.log('val?.result?.data ', val?.result?.data)
          let { type, layout_style, layout, container_id, css } = val?.result?.data?.widgets[0]?.details;
          let showPopup = val?.result?.data?.widgets[0]?.show_recent_popup;
          let script = document.createElement("script");
          let popupscript = document.createElement("script");
          console.log("before switch", type);

          switch (type) {
            case "floating":
              if (layout_style == "top") {
                script.src = APP_URL + "widgets/horizontal_widget.js";
                script.setAttribute("position", layout_style);
              }
              if (layout_style == "bottom") {
                script.src = APP_URL + "widgets/horizontal_widget.js";
                script.setAttribute("position", layout_style);
              }
              if (layout_style == "left") {
                script.src = APP_URL + "widgets/floating_bar.js";
                script.setAttribute("position", layout_style);
              }
              if (layout_style == "right") {
                script.src = APP_URL + "widgets/floating_bar.js";
                script.setAttribute("position", layout_style);
              }
              break;
            case "badge":
              if (layout_style == "badge") {
                script.src = APP_URL + "widgets/badge.js";
              }
              if (layout_style == "badge_monochromatic_fill") {
                script.src = APP_URL + "widgets/badge_monochromatic_fill.js";
              }
              if (css == "display-block" && type == "badge") {
                script.src = APP_URL + "widgets/badge_monochromatic_fill.js";
                layout_style = "badge_monochromatic_fill";
                container_id = `${this.companyId}-${this.widgetId}`;
              }
              break;
            case "button":
              script.src = APP_URL + "widgets/button.js";
              break;
            case "slider":
              script.src = APP_URL + "widgets/slider_widget.js";
              break;
            case "carousel":
              console.log("inside case carousel");

              script.src = APP_URL + "widgets/carousel.js";
              break;
          }

          if (!!showPopup) {
            popupscript.src = APP_URL + "widgets/bottom_widget.js";
            popupscript.setAttribute("company-id", this.companyId);
            popupscript.setAttribute("layout-style", layout_style);
            popupscript.setAttribute("container-id", container_id);
            popupscript.setAttribute("widget-id", this.widgetId);
            if (css?.desktop) {
              popupscript.setAttribute("field-desktop-css", css?.desktop);
              popupscript.setAttribute("field-mobile-css", css?.mobile);
            }
            popupscript.async = true;
          }

          script.setAttribute("company-id", this.companyId);
          script.setAttribute("layout-style", layout_style);
          script.setAttribute("container-id", container_id);
          script.setAttribute("widget-id", this.widgetId);
          if (css?.desktop) {
            script.setAttribute("field-desktop-css", css?.desktop);
            script.setAttribute("field-mobile-css", css?.mobile);
          }
          script.async = true;

          document.body.appendChild(script);
          document.body.appendChild(popupscript);
        }
      }
    } catch (err) {
      console.log("err", err);
    }
  }
}

new Widget();
