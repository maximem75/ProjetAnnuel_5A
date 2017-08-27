package server.utils;

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
        return date1.compareTo(date2) >= 0;
    }

    /**
     * Return true if date1 equals date2
     *
     * @param date1
     * @param date2
     * @return
     */
    public boolean dateEquals(Date date1, Date date2) {
        return date1.compareTo(date2) == 0;
    }

    /**
     * The function calculate the difference of days between two dates.
     * It return true if the number of days is superior or equal to
     * the days send in parameters. Else it return false.
     *
     * @param d1
     * @param d2
     * @param days
     * @return
     */
    public boolean compareDateByDays(Date d1, Date d2, int days) {
        long diff = Math.abs(d2.getTime() - d1.getTime());
        long diffDays = diff / 86400000;

        return diffDays >= days;
    }

    /**
     * The function return true if the dates are not in collision,
     * else the function return false.
     *
     * @param start1
     * @param end1
     * @param start2
     * @param end2
     * @return true
     */
    public static boolean dateBookAvailable(Date start1, Date end1, Date start2, Date end2, String status, Date dateBook, int minDays) {
        DateComparer dc = new DateComparer();
        boolean dateValide = DateComparer.compareDateByTime(dateBook, 15, 0);

        boolean dateStart1EarlierThanDateStart2 = dc.dateEarlier(start1, start2);
        boolean dateStart1EarlierThanDateEnd2 = dc.dateEarlier(start1, end2);

        boolean dateEnd1EarlierThanDateStart2 = dc.dateEarlier(end1, start2);
        boolean dateEnd1EarlierThanDateEnd2 = dc.dateEarlier(end1, end2);

        //DateBook expired
        if (status.equals("inactive") && !dateValide)
            return true;

        if(!dc.compareDateByDays(start1, end1, minDays))
            return false;

        if (dateStart1EarlierThanDateStart2 && !dateStart1EarlierThanDateEnd2)
            return false;

        if (dateEnd1EarlierThanDateStart2 && !dateEnd1EarlierThanDateEnd2)
            return false;

        if (!dateStart1EarlierThanDateStart2 && dateEnd1EarlierThanDateEnd2)
            return false;

        if (dc.dateEquals(start1, start2) && dc.dateEquals(end1, end2))
            return false;

        return true;
    }

    /**
     * Check if the date Start is holder than the date End.
     * If the date Start is holder, the function return true
     * else it return false.
     *
     * @param start
     * @param end
     * @return
     */
    public static boolean dateValidator(Date start, Date end) {
        DateComparer dc = new DateComparer();

        if (!dc.dateEarlier(start, end)) {
            return true;
        }

        return false;
    }

    /**
     * The function calculate the difference between the current time
     * and the date send in parameters.
     * If the min time send in parameters isn't over,
     * the function return true else it return false.
     *
     * @param date
     * @param minutes
     * @param hours
     * @return
     */
    public static boolean compareDateByTime(Date date, int minutes, int hours) {
        Date currentDate = new Date();

        long diff = Math.abs(currentDate.getTime() - date.getTime());
        long diffMinutes = diff / 60000 % 60;
        long diffHours = diff / 3600000;

        return diffHours <= hours && diffMinutes < minutes;
    }
}
