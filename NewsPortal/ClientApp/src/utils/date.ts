import * as moment from "moment";
moment.locale("en");

export const formatDate = (date: Date): string => moment(date).format("YYYY-MM-DD");
