public class Codec {
    Map<String, String> longUrlMap = new HashMap<>();
    Map<String, String> shortUrlMap = new HashMap<>();
    String baseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    String prefixUrl = "http://tinyurl.com/";
    int shortLen = 6;
    Random random = new Random();

    // Encodes a URL to a shortened URL.
    public String encode(String longUrl) {
        while (!longUrlMap.containsKey(longUrl)) {
            char[] choosedChars = new char[shortLen];
            for (int i = 0; i < shortLen; i++) {
                choosedChars[i] = baseChars.charAt(random.nextInt(baseChars.length()));
            }

            String shortUrl = prefixUrl + String.valueOf(choosedChars);
            if (!longUrlMap.containsKey(shortUrl)) {
                longUrlMap.put(longUrl, shortUrl);
                shortUrlMap.put(shortUrl, longUrl);
            }
        }

        return longUrlMap.get(longUrl);
    }

    // Decodes a shortened URL to its original URL.
    public String decode(String shortUrl) {
        return shortUrlMap.get(shortUrl);
    }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.decode(codec.encode(url));
