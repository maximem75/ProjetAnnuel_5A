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
     * @param roomBooking1
     * @param roomBooking2
     * @return
     */
    public static boolean dateRoomBookingAvailable(RoomBooking roomBooking1, RoomBooking roomBooking2) {
        DateComparer dc = new DateComparer();

        boolean dateStartEarlierThanDateStart = dc.dateEarlier(roomBooking1.getDateStart(), roomBooking2.getDateStart());
        boolean dateStartEarlierThanDateEnd  = dc.dateEarlier(roomBooking1.getDateStart(), roomBooking2.getDateEnd());

        boolean dateEndEarlierThanDateStart = dc.dateEarlier(roomBooking1.getDateEnd(), roomBooking2.getDateStart());
        boolean dateEndEarlierThanDateEnd  = dc.dateEarlier(roomBooking1.getDateEnd(), roomBooking2.getDateEnd());

        if (dateStartEarlierThanDateStart == true && dateStartEarlierThanDateEnd == false){
            return false;
        }

        if(dateEndEarlierThanDateStart == true && dateEndEarlierThanDateEnd == false){
            return false;
        }

        if(dateStartEarlierThanDateStart == false && dateEndEarlierThanDateEnd == true){
            return false;
        }

        if(dc.dateEarlier(roomBooking1.getDateStart(), roomBooking1.getDateEnd())){
            return false;
        }

        return true;
    }

}
