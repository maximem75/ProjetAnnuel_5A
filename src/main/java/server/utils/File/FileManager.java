package server.utils.File;

import java.io.*;

/**
 * Created by maxime on 20/09/2017.
 */
public class FileManager {

    public FileManager() {

    }

    public String getFileName(String imagePath) {
        int length = imagePath.split("\\\\").length;
        String fileName = imagePath.split("\\\\")[length - 1];

        return fileName;
    }

    public String saveImage(String pathClient, String pathServer) {
        InputStream is = null;
        OutputStream os = null;

        try {
            is = new FileInputStream(new File(pathClient));
            os = new FileOutputStream(new File(System.getProperty("user.dir") + pathServer));
            byte[] buffer = new byte[1024];
            int length;
            while ((length = is.read(buffer)) > 0) {
                os.write(buffer, 0, length);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                is.close();
                os.close();

                return System.getProperty("user.dir") + pathServer;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        return "";
    }
}
