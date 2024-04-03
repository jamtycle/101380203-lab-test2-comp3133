export interface Mission {
    flight_number: number;
    mission_name: string;
    mission_id: string[];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: string;
    launch_date_local: string;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: {
        rocket_id: string;
        rocket_name: string;
        rocket_type: string;
        first_stage: {
            cores: {
                core_serial: string;
                flight: number;
                block: number | null;
                gridfins: boolean;
                legs: boolean;
                reused: boolean;
                land_success: boolean | null;
                landing_intent: boolean;
                landing_type: string | null;
                landing_vehicle: string | null;
            }[];
        };
        second_stage: {
            block: number;
            payloads: {
                payload_id: string;
                norad_id: number[];
                reused: boolean;
                customers: string[];
                nationality: string;
                manufacturer: string;
                payload_type: string;
                payload_mass_kg: number;
                payload_mass_lbs: number;
                orbit: string;
                orbit_params: {
                    reference_system: string;
                    regime: string;
                    longitude: number | null;
                    semi_major_axis_km: number | null;
                    eccentricity: number | null;
                    periapsis_km: number;
                    apoapsis_km: number;
                    inclination_deg: number;
                    period_min: number | null;
                    lifespan_years: number | null;
                    epoch: string | null;
                    mean_motion: number | null;
                    raan: number | null;
                    arg_of_pericenter: number | null;
                    mean_anomaly: number | null;
                };
            }[];
        };
        fairings: {
            reused: boolean;
            recovery_attempt: boolean;
            recovered: boolean;
            ship: string | null;
        };
    };
    ships: string[];
    telemetry: {
        flight_club: string | null;
    };
    launch_site: {
        site_id: string;
        site_name: string;
        site_name_long: string;
    };
    launch_success: boolean;
    launch_failure_details: {
        time: number;
        altitude: number | null;
        reason: string;
    };
    links: {
        mission_patch: string;
        mission_patch_small: string;
        reddit_campaign: string | null;
        reddit_launch: string | null;
        reddit_recovery: string | null;
        reddit_media: string | null;
        presskit: string | null;
        article_link: string;
        wikipedia: string;
        video_link: string;
        youtube_id: string;
        flickr_images: string[];
    };
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: {
        webcast_liftoff: number;
    };
    crew: null;
}

// {
//     "flight_number": 1,
//     "mission_name": "FalconSat",
//     "mission_id": [],
//     "upcoming": false,
//     "launch_year": "2006",
//     "launch_date_unix": 1143239400,
//     "launch_date_utc": "2006-03-24T22:30:00.000Z",
//     "launch_date_local": "2006-03-25T10:30:00+12:00",
//     "is_tentative": false,
//     "tentative_max_precision": "hour",
//     "tbd": false,
//     "launch_window": 0,
//     "rocket": {
//         "rocket_id": "falcon1",
//         "rocket_name": "Falcon 1",
//         "rocket_type": "Merlin A",
//         "first_stage": {
//             "cores": [
//                 {
//                     "core_serial": "Merlin1A",
//                     "flight": 1,
//                     "block": null,
//                     "gridfins": false,
//                     "legs": false,
//                     "reused": false,
//                     "land_success": null,
//                     "landing_intent": false,
//                     "landing_type": null,
//                     "landing_vehicle": null
//                 }
//             ]
//         },
//         "second_stage": {
//             "block": 1,
//             "payloads": [
//                 {
//                     "payload_id": "FalconSAT-2",
//                     "norad_id": [],
//                     "reused": false,
//                     "customers": [
//                         "DARPA"
//                     ],
//                     "nationality": "United States",
//                     "manufacturer": "SSTL",
//                     "payload_type": "Satellite",
//                     "payload_mass_kg": 20,
//                     "payload_mass_lbs": 43,
//                     "orbit": "LEO",
//                     "orbit_params": {
//                         "reference_system": "geocentric",
//                         "regime": "low-earth",
//                         "longitude": null,
//                         "semi_major_axis_km": null,
//                         "eccentricity": null,
//                         "periapsis_km": 400,
//                         "apoapsis_km": 500,
//                         "inclination_deg": 39,
//                         "period_min": null,
//                         "lifespan_years": null,
//                         "epoch": null,
//                         "mean_motion": null,
//                         "raan": null,
//                         "arg_of_pericenter": null,
//                         "mean_anomaly": null
//                     }
//                 }
//             ]
//         },
//         "fairings": {
//             "reused": false,
//             "recovery_attempt": false,
//             "recovered": false,
//             "ship": null
//         }
//     },
//     "ships": [],
//     "telemetry": {
//         "flight_club": null
//     },
//     "launch_site": {
//         "site_id": "kwajalein_atoll",
//         "site_name": "Kwajalein Atoll",
//         "site_name_long": "Kwajalein Atoll Omelek Island"
//     },
//     "launch_success": false,
//     "launch_failure_details": {
//         "time": 33,
//         "altitude": null,
//         "reason": "merlin engine failure"
//     },
//     "links": {
//         "mission_patch": "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
//         "mission_patch_small": "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
//         "reddit_campaign": null,
//         "reddit_launch": null,
//         "reddit_recovery": null,
//         "reddit_media": null,
//         "presskit": null,
//         "article_link": "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
//         "wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
//         "video_link": "https://www.youtube.com/watch?v=0a_00nJ_Y88",
//         "youtube_id": "0a_00nJ_Y88",
//         "flickr_images": []
//     },
//     "details": "Engine failure at 33 seconds and loss of vehicle",
//     "static_fire_date_utc": "2006-03-17T00:00:00.000Z",
//     "static_fire_date_unix": 1142553600,
//     "timeline": {
//         "webcast_liftoff": 54
//     },
//     "crew": null
// }