int levenshteinDistance(String s, String t)
{
  if (t.length() &lt; s.length())
  {
    String tmp = s;
    s = t;
    t = tmp;
  }
  if (s == t || s.length() == 0 || t.length() == 0)
    return 0;

  int[] v0 = new int[t.length() + 1];
  int[] v1 = new int[t.length() + 1];
  int tlength = t.length();
  int slength = s.length();
  char schar;

  for (int i = 0; i &lt; v0.length; i++)
    v0[i] = i;

  for (int i = 0; i &lt; slength; i++)
  {
    v1[0] = i + 1;
    schar = s.charAt(i);

    for (int j = 0; j &lt; tlength; j++)
    {
      v1[j + 1] = Math.min(v1[j] + 1, Math.min(v0[j + 1] + 1, v0[j] + ((schar == t.charAt(j)) ? 0 : 1)));
    }
    System.arraycopy(v1, 0, v0, 0, v0.length);
  }
  return v1[t.length()];
}