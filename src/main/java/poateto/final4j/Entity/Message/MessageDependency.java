package poateto.final4j.Entity.Message;

public interface MessageDependency {
    Sender getSender();
    String getMessage();
    String getTime();
}
