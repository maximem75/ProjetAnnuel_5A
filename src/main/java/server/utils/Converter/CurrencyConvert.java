package server.utils.Converter;

import org.json.JSONObject;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by maxime on 27/09/2017.
 */
public class CurrencyConvert {

    public static float getConvertedPrice(float price, String ipClient) {
        String js = CurrencyConvert.countryCurrencyInfo(ipClient, "EUR");
        JSONObject jsonObject = new JSONObject(js);
        double rate = (double) jsonObject.get("rate");
        float r = (float) rate;
        float cfaPrice = price * r;

        return cfaPrice;
    }

    public static String getIp() {
        String ip = "";
        URL url = null;
        try {
            url = new URL("http://checkip.amazonaws.com/");
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
        BufferedReader br = null;
        try {
            br = new BufferedReader(new InputStreamReader(url.openStream()));
        } catch (IOException e) {
            e.printStackTrace();
        }
        try {
            ip = br.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return ip;
    }

    public static String countryCurrencyInfo(String ipClient, String countryCode) {
        HttpURLConnection yc = null;

        try {
            //Create connection
            URL oracle = new URL("https://v3.exchangerate-api.com/local/af6f4d68a25c748a047a1628/"+ countryCode +"/" + ipClient);
            yc = (HttpURLConnection) oracle.openConnection();

            yc.setRequestProperty("Content-Type",
                    "application/x-www-form-urlencoded");

            yc.setUseCaches(false);
            yc.setDoOutput(true);

            //Send request
            DataOutputStream wr = new DataOutputStream(
                    yc.getOutputStream());
            wr.close();

            //Get Response
            InputStream is = yc.getInputStream();
            BufferedReader rd = new BufferedReader(new InputStreamReader(is));
            StringBuilder response = new StringBuilder(); // or StringBuffer if Java version 5+
            String line;
            while ((line = rd.readLine()) != null) {
                response.append(line);
                response.append('\r');
            }
            rd.close();

            return response.toString();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            if (yc != null) {
                yc.disconnect();
            }
        }
    }

}
