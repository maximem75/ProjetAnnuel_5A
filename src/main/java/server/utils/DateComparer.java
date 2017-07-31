package server.utils;

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
     *
     * @param start1
     * @param end1
     * @param start2
     * @param end2
     * @return
     */
    public static boolean dateRoomBookingAvailable(Date start1, Date end1, Date start2, Date end2) {
        DateComparer dc = new DateComparer();

        boolean dateStartEarlierThanDateStart = dc.dateEarlier(start1, start2);
        boolean dateStartEarlierThanDateEnd  = dc.dateEarlier(start1, end2);

        boolean dateEndEarlierThanDateStart = dc.dateEarlier(end1, start2);
        boolean dateEndEarlierThanDateEnd  = dc.dateEarlier(end1, end2);

        if (dateStartEarlierThanDateStart == true && dateStartEarlierThanDateEnd == false){
            return false;
        }

        if(dateEndEarlierThanDateStart == true && dateEndEarlierThanDateEnd == false){
            return false;
        }

        if(dateStartEarlierThanDateStart == false && dateEndEarlierThanDateEnd == true){
            return false;
        }

        if(dc.dateEarlier(start1, end1)){
            return false;
        }

        return true;
    }

}
