package server.utils;

import com.sun.scenario.effect.impl.sw.sse.SSEBlend_SRC_OUTPeer;
import org.springframework.stereotype.Service;
import server.model.RoomBooking;

import java.util.Date;


public class DateComparer {

    public DateComparer() {

    }

    /**
     * Return true if date1 is earlier than date2
     *
     * @param date1
     * @param date2
     * @return
     */
    public boolean dateEarlier(Date date1, Date date2) {
        if (date1.compareTo(date2) >= 0)
            return true;
        else
            return false;
    }

    /**
     * @param start1
     * @param end1
     * @param start2
     * @param end2
     * @return true if date is valide else return false
     */
    public static boolean dateRoomBookingAvailable(Date start1, Date end1, Date start2, Date end2, String status, Date dateBook) {
        boolean res = true;
        boolean dateValide = false;
        DateComparer dc = new DateComparer();

        boolean dateStartEarlierThanDateStart = dc.dateEarlier(start1, start2);
        boolean dateStartEarlierThanDateEnd = dc.dateEarlier(start1, end2);

        boolean dateEndEarlierThanDateStart = dc.dateEarlier(end1, start2);
        boolean dateEndEarlierThanDateEnd = dc.dateEarlier(end1, end2);

        if (status.equals("active") == true) {
            if (dateStartEarlierThanDateStart == true && dateStartEarlierThanDateEnd == false) {
                res = false;
            }

            if (dateEndEarlierThanDateStart == true && dateEndEarlierThanDateEnd == false) {
                res = false;
            }

            if (dateStartEarlierThanDateStart == false && dateEndEarlierThanDateEnd == true) {
                res = false;
            }

            if (dc.dateEarlier(start1, end1)) {
                res = false;
            }
        } else if (status.equals("inactive") == true) {
            dateValide = DateComparer.compareDateByTime(dateBook, 15, 0);

            if(dateValide == true){
                if (dateStartEarlierThanDateStart == true && dateStartEarlierThanDateEnd == false) {
                    res = false;
                }

                if (dateEndEarlierThanDateStart == true && dateEndEarlierThanDateEnd == false) {
                    res = false;
                }

                if (dateStartEarlierThanDateStart == false && dateEndEarlierThanDateEnd == true) {
                    res = false;
                }

                if (dc.dateEarlier(start1, end1)) {
                    res = false;
                }
            }
        }

        return res;
    }

    public static boolean compareDateByTime(Date date, int minutes, int hours) {
        Date currentDate = new Date();

        long diff = Math.abs(currentDate.getTime() - date.getTime());
        long diffMinutes = diff / 60000 % 60;
        long diffHours = diff / 3600000;

        if (diffHours <= hours && diffMinutes < minutes) {
            return true;
        } else {
            return false;
        }
    }
}
