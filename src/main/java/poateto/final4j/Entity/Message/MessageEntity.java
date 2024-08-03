package poateto.final4j.Entity.Message;


import java.text.SimpleDateFormat;
import java.util.Date;

public class MessageEntity implements MessageDependency {
    private Sender sender;
    private String message;
    private String time;

    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public MessageEntity() {}
    public MessageEntity(Sender sender, String message) {
        this.sender = sender;
        this.message = message;
        this.time = formatter.format(new Date());
        System.out.printf("sender: %s, time: %s%n",
                sender, getTime());
    }

    @Override
    public Sender getSender() { return sender; }
    @Override
    public String getMessage() { return message; }
    @Override
    public String getTime() { return time; }
}
