package poateto.final4j.Entity.Message;

import poateto.final4j.Entity.User.UserEntity;

public class UserMessage extends MessageEntity {
    private final UserEntity user;

    public UserMessage(UserEntity user, String message) {
        super(Sender.USER, message);
        this.user = user;
    }

    public UserEntity getUser() { return user; }
}
