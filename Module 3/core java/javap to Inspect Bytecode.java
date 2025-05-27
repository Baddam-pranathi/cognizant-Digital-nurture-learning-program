public class BytecodeSample {
    public static void sayHello() {
        System.out.println("Hello Bytecode!");
    }

    public static void main(String[] args) {
        sayHello();
    }
}
javac BytecodeSample.java
javap -c BytecodeSample
