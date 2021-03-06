import { RouteComponentProps } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Speakers } from "../pages/speakers/speakers";
import { Schedule } from "../pages/schedule/schedule";
import { Tickets } from "../pages/tickets/tickets";
import { Venue } from "../pages/venue/venue";
import { Sponsors } from "../pages/sponsors/sponsors";
import { CoC } from "../pages/coc/coc";
import { CoCDetails } from "../pages/coc/coc_details";
import { Cfp } from "../pages/cfp/cfp";
import { CfpDetails } from "../pages/cfp/cfp_details";
import { Blog } from "../pages/blog/blog";
import { BlogEntry } from "../pages/blog/blog_entry";
import { Newsletter } from "../pages/newsletter/newsletter";

interface RouteConf {
    isIndex?: boolean;
    displayInNavBar?: boolean;
    title: string;
    path: string;
    component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

export const PATHS = {
    home: "/",
    speakers: "/speakers",
    schedule: "/schedule",
    venue: "/venue",
    cfp: "/cfp",
    cfpDetails: "/cfp_details",
    tickets: "/tickets",
    sponsors: "/sponsors",
    coc: "/coc",
    cocDetails: "/coc_details",
    blog: "/blog",
    blogEntry: "/blog_entry/:id",
    newsletter: "/newsletter"
};

export const routes: RouteConf[] = [
    { isIndex: true, title: "JSDayIE 2019", path: PATHS.home, component: Home },
    { title: "Call for Proposals", path: PATHS.cfp, component: Cfp },
    { displayInNavBar: false, title: "Speakers", path: PATHS.speakers, component: Speakers },
    { title: "Schedule", path: PATHS.schedule, component: Schedule },
    { title: "Venue", path: PATHS.venue, component: Venue },
    { displayInNavBar: false, title: "Call for Proposals - Details", path: PATHS.cfpDetails, component: CfpDetails },
    { title: "Tickets", path: PATHS.tickets, component: Tickets },
    { title: "Sponsors", path: PATHS.sponsors, component: Sponsors },
    { title: "Blog", path: PATHS.blog, component: Blog },
    { displayInNavBar: false, title: "Blog Entry", path: PATHS.blogEntry, component: BlogEntry },
    { title: "Newsletter", path: PATHS.newsletter, component: Newsletter },
    { title: "Code of conduct", path: PATHS.coc, component: CoC },
    { displayInNavBar: false, title: "Code of conduct - Details", path: PATHS.cocDetails, component: CoCDetails }
];
