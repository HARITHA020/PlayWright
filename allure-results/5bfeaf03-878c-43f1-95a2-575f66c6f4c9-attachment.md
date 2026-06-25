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
      - button "Google apps" [ref=e10] [cursor=pointer]:
        - img [ref=e11]
      - link "Sign in" [ref=e15] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/%3Fzx%3D1782371449215&ec=futura_exp_og_so_72776762_e
  - generic [ref=e17]:
    - 'link "World Cup 2026: Knee slide" [ref=e18] [cursor=pointer]':
      - /url: /search?sca_esv=eb7e31ac54169e18&q=What+are+some+of+the+most+iconic+football+fan+celebrations+around+the+world%3F&udm=50&oi=ddle&noiga=1&ct=460194320&peek_pws=0&aep=84&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4QPQgG
      - 'img "World Cup 2026: Knee slide" [ref=e20]'
    - button "Share" [ref=e22]:
      - generic "Share" [ref=e23] [cursor=pointer]:
        - img [ref=e27]
  - search [ref=e30]:
    - generic [ref=e32]:
      - generic [ref=e34]:
        - button "Add files and tools" [ref=e37] [cursor=pointer]:
          - img [ref=e39]
        - combobox "Search" [active] [ref=e42]
        - generic [ref=e43]:
          - generic [ref=e44]:
            - button "Search by voice" [ref=e45] [cursor=pointer]:
              - img [ref=e46]
            - button "Search by image" [ref=e48] [cursor=pointer]:
              - img [ref=e49]
          - link "AI Mode" [ref=e51] [cursor=pointer]:
            - generic [ref=e53]:
              - img [ref=e55]
              - generic [ref=e62]: AI Mode
      - generic [ref=e64]:
        - button "Google Search" [ref=e65] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e66] [cursor=pointer]
  - generic [ref=e69]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e70] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCDk
    - link "বাংলা" [ref=e71] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCDo
    - link "తెలుగు" [ref=e72] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCDs
    - link "मराठी" [ref=e73] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCDw
    - link "தமிழ்" [ref=e74] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCD0
    - link "ગુજરાતી" [ref=e75] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCD4
    - link "ಕನ್ನಡ" [ref=e76] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCD8
    - link "മലയാളം" [ref=e77] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCEA
    - link "ਪੰਜਾਬੀ" [ref=e78] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_LClHhJ0AcQgqVrfLTd2slo8ED3I%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwii9KCR66GVAxV_R2wGHTzHNl4Q2ZgBCEE
  - contentinfo [ref=e80]:
    - generic [ref=e81]: India
    - generic [ref=e82]:
      - generic [ref=e83]:
        - link "Advertising" [ref=e84] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e85] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e86] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e87]:
        - link "Privacy" [ref=e88] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e89] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e93] [cursor=pointer]:
          - generic [ref=e94]: Settings
```