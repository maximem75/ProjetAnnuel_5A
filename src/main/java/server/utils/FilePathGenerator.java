package server.utils;

/**
 * Created by maxime on 20/09/2017.
 */
public class FilePathGenerator {

    public FilePathGenerator(){

    }

    public static String generatePath(String imagePath, String prePath){
        int length = imagePath.split("\\\\").length;
        String fileName = imagePath.split("\\\\")[length -1];

        return System.getProperty("user.dir")+ prePath + fileName;
    }

}
