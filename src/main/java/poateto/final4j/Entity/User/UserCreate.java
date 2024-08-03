package poateto.final4j.Entity.User;

public class UserCreate extends UserEntity {
    private String name;
    public UserCreate() { super(); }
    public UserCreate(String name, String email, String password) {
        super(email, password);
        this.name = name;
    }
    public String getName() { return name; }
}
