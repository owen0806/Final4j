package poateto.final4j.Entity.Message;

public class LMMessage extends MessageEntity {
    private String model;

    public LMMessage() { }
    public LMMessage(String model, String message) {
        super(Sender.LM, message);
        this.model = model;
    }

    public String getModel() { return model; }
}
