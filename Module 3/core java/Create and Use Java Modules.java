module com.utils {
    exports com.utils;
}
package com.utils;

public class Utility {
    public static String greet(String name) {
        return "Hello, " + name;
    }
}
module com.greetings {
    requires com.utils;
}
package com.greetings;

import com.utils.Utility;

public class Main {
    public static void main(String[] args) {
        System.out.println(Utility.greet("World"));
    }
}
