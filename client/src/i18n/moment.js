import moment from "moment";
import "moment/locale/en-ca";
import "moment/locale/ru";

export default locale => {
  moment.locale(locale);
  return moment;
};
