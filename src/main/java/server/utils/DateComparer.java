package server.utils;

import org.springframework.stereotype.Service;
import server.model.RoomBooking;

import java.util.Date;

@Service
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
    public boolean dateRoomBookingAvailable(RoomBooking roomBooking1, RoomBooking roomBooking2) {
        boolean dateStartEarlierThanDateStart = dateEarlier(roomBooking1.getDateStart(), roomBooking2.getDateStart());
        boolean dateStartEarlierThanDateEnd  = dateEarlier(roomBooking1.getDateStart(), roomBooking2.getDateEnd());

        boolean dateEndEarlierThanDateStart = dateEarlier(roomBooking1.getDateEnd(), roomBooking2.getDateStart());
        boolean dateEndEarlierThanDateEnd  = dateEarlier(roomBooking1.getDateEnd(), roomBooking2.getDateEnd());

        if (dateStartEarlierThanDateStart == true && dateStartEarlierThanDateEnd == false){
            return false;
        }

        if(dateEndEarlierThanDateStart == true && dateEndEarlierThanDateEnd == false){
            return false;
        }

        if(dateStartEarlierThanDateStart == false && dateEndEarlierThanDateEnd == true){
            return false;
        }

        if(dateEarlier(roomBooking1.getDateStart(), roomBooking1.getDateEnd())){
            return false;
        }

        return true;
    }

}
