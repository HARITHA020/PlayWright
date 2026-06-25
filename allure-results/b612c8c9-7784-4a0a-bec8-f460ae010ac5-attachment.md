# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: basiccommand.test.ts >> Basic Commands
- Location: tests\basiccommand.test.ts:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]:
        - img [ref=e16]
      - link "Sign in" [ref=e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/%3Fzx%3D1782371444450&ec=futura_exp_og_so_72776762_e
  - generic [ref=e22]:
    - 'link "World Cup 2026: Knee slide" [ref=e23] [cursor=pointer]':
      - /url: /search?sca_esv=eb7e31ac54169e18&q=What+are+some+of+the+most+iconic+football+fan+celebrations+around+the+world%3F&udm=50&oi=ddle&noiga=1&ct=460194320&peek_pws=0&aep=84&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQPQgG
      - 'img "World Cup 2026: Knee slide" [ref=e25]'
    - button "Share" [ref=e27]:
      - generic "Share" [ref=e28] [cursor=pointer]:
        - img [ref=e32]
  - search [ref=e35]:
    - generic [ref=e37]:
      - generic [ref=e39]:
        - button "Add files and tools" [ref=e42] [cursor=pointer]:
          - img [ref=e44]
        - combobox "Search" [active] [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - button "Search by voice" [ref=e50] [cursor=pointer]:
              - img [ref=e51]
            - button "Search by image" [ref=e53] [cursor=pointer]:
              - img [ref=e54]
          - link "AI Mode" [ref=e56] [cursor=pointer]:
            - generic [ref=e58]:
              - img [ref=e60]
              - generic [ref=e67]: AI Mode
      - generic [ref=e69]:
        - button "Google Search" [ref=e70] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e71] [cursor=pointer]
  - generic [ref=e72]:
    - generic [ref=e80]:
      - img [ref=e83]
      - link "Catch the latest moments from the FIFA World Cup 2026 on YouTube" [ref=e84] [cursor=pointer]
    - generic [ref=e86]:
      - text: "Google offered in:"
      - link "हिन्दी" [ref=e87] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCDk
      - link "বাংলা" [ref=e88] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCDo
      - link "తెలుగు" [ref=e89] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCDs
      - link "मराठी" [ref=e90] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCDw
      - link "தமிழ்" [ref=e91] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCD0
      - link "ગુજરાતી" [ref=e92] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCD4
      - link "ಕನ್ನಡ" [ref=e93] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCD8
      - link "മലയാളം" [ref=e94] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCEA
      - link "ਪੰਜਾਬੀ" [ref=e95] [cursor=pointer]:
        - /url: https://www.google.com/setprefs?sig=0_nyRVN6ws6O-0FiVqLjCWZhOnd08%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwjti4uR66GVAxUzWHADHX7CFLsQ2ZgBCEE
  - contentinfo [ref=e97]:
    - generic [ref=e98]: India
    - generic [ref=e99]:
      - generic [ref=e100]:
        - link "Advertising" [ref=e101] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e102] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e103] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e104]:
        - link "Privacy" [ref=e105] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e106] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e110] [cursor=pointer]:
          - generic [ref=e111]: Settings
```