# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AutomationExercise\TC1.test.ts >> register test case
- Location: tests\AutomationExercise\TC1.test.ts:3:1

# Error details

```
Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
    1) <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    2) <input value="" required="" type="email" name="email" data-qa="signup-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    3) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByPlaceholder('Email Address')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - insertion:
      - generic:
        - iframe
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f8e1]:
        - generic [active]:
          - generic [ref=f9e1]:
            - generic [ref=f9e2]:
              - generic:
                - img [ref=f9e6] [cursor=pointer]
                - button [ref=f9e8] [cursor=pointer]:
                  - img [ref=f9e9]
            - insertion [ref=f9e16]:
              - generic [ref=f9e17]:
                - link "Click Here" [ref=f9e18] [cursor=pointer]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=C3Ztm2QY9apzLMbOd4dkPxJKgiA_5zOD_hwG0usSI9RShpvjz0B0QASD9tJ6VAWDlmuiD2A6gAYviiqAByAEJqAMByAObBKoEgwJP0Nn8kYVr9OaLm6pQU1n36EESTj241JrnGyTmAyJfDcInQGjq0kNfTU5XLKmfTJGaJNL_pQ-EudTL2PuRbU42LiyvZDvcBR8mZ0iubCUxxIBscjIAVWuqXK6zhVqRCsTxnx_BuGEz4vgOT-0Evm18U7-UI8aa20eSTHk-PS5qF7BhWxmROUfxBTrU89b4G7ZPI9lq4GmuocKFA907UY68dF1VhgzyRbm_8dyYjEbj9NKpuqiqdz87SGodTpnLgUPFmW2csx7CzUkKxadqt3TTpEG_nKOALeY1U4DISPTZkN3OH0fZpmthOwih6Eu-unLjreUH2n8_1_mmVd-ABInonRuQwASaxOuykwXgBAOIBe2K3IBTkAYBoAZNgAfdnfXfAqgHp8yxAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAqgH59exAtgHANIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY1t2ijpuilQNgAYAKAZgLAcgLAYAMAaoNAklO6g0TCOeipI6bopUDFbNOOAUdRAkI8fANAYgOCbATkNj4ItATANgTDYgUAdgUAdAVAcoWAgoA-BYBgBcBshcEGAJQBrIYCRICnWMYTSIBANAZAQ&ae=1&num=1&cid=CAQSiAIAEQoqgYlxTxH0W66DGxcy2uUbrDr6gTLlFLqK5lEmRZ7QW7Wo-xZuNRe2gfwKQhR11l253s29qOxSrkJi4uqHrRmSr8hlSVX4Kxhm6rTrVyGum5n2AhQvVMmDPWrMQ6V65Ca-V2LiW0OdpSRt4p9Q8t99D6zKr91N1rWPLNDyW6ZC_DdMHjydcf8TebTWpVoxW0o5jSWGgc9WgumAWfpMoSK4UsK58eAIDFcaS5wZKRdCE8i7wGef0PsTQM3SomPGNetrhUNe8Sp80AQyYBSJeGYUiBz0PXrfK7CivzHk48V45lTwFDeA67bNGv258Jqt9XYLLv_AVWKRJMabyIQh5_3dt9UoNNIYAQ&sig=AOD64_1qk5P-GtlOpM35r1JVEg0P25CnDQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-AEhxLKS03ItVN6vYYlsib-GwBvfZqJqSq910r5xI0mwlRGkO4tvgglYXUkAT_ZGshXJVFsdKvaiGyzxS7HuGuOJGG4QtTa9Sz7mvhhjO8u0d6scliZCKIYaaaXGjSxbLfjJp_I2WyMPn9RllJM3LnzPOaEeQypqlkMjYjB4p8x8kvU9FNolotwOILp3dhRVEfVsD3WiJd04DwSkNdEaE6jE5xmGrIrHlbqmWG5X01CZeQ_fDcJuCTEguOioTBfzxJZcTa8cT8XSyMbHoH6NofAsU0YMn6a5TzyicIbj9vNZW15R7w&cry=1&dbm_d=AKAmf-Br9yawpBgoHZaW4y8YAlmlPQF8HE_iy2JH6A7fw5phSG5FvILi_iwXsCTiowMVbTMdB89tJyaQY_XPKHU4MS4ihfpHzv-AHnusEVpttjfeljVuXeKw0E63EQJaN81SkDbIMjbLSB-Sg1ou-xP2QnVMbf8sJedo_3YLXBDFKnWSlJ14yePyG2euaZCIym0_-a3MKlaBl-YWPUvyGFNjgy63ZGnEQk4fSweupr3BXJIdXldkAMOU-ext0CptuPc6rDyXpiyys9a8v_hy-dA07UOQ9xOGl2q7KfqG0TJLbTaOGfcbPqE0sWohSk-IWjg691bO6NcHgBEBHbWt02x6tNvS_XgrUpNaGkQT0l0B1IcXMdqeb87oMjN2un9At9JLpFqNbfTzA1fE9m45QLGb6LQ_Thva-_HmIIW44pmIVijrjkNZtx6hxpkeIV3b9EJxw4vcJ9LdcWLXbXdbNEGF9jsZ5Ot8YpN-x7JePBAcnZGK0tqzHMXfLVM0d7RiUjwS2gOfyeVWlFBbvOJK1vaJvMJTpjbXk0nB8CDbUTwan2cmUlT2ofM_25QWQVdo_9s_CO58ppSn6lR_XhRx4S6XOOrmC12JryyQ7Dt4jM1fJFNXz-J4jx2H68dhE-YvLWbp68BHRrLB8-NFKmTBUhhdbb0wGOiU2NVLDGPClGV9kS9FFEGWfsndslZ1efa7kEiRiwhqUyBr&adurl=https://servedby.flashtalking.com/click/7/296969;10263352;5404130;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0gCuRn70oZcZZIkeBhHw8lU&ft_impID=8EF175C2-6542-A51D-5A91-93F56EEE4424&ft_section=22281651565&g=6750833148D2C5&random=778146.2973230479&ft_width=728&ft_height=90&url=https://www.adobe.com/in/creativecloud.html?sdid=PC1PQ9XF&mv=display&mv2=display
                  - img "Click Here" [ref=f9e19]
                - link "AdChoices arrow" [ref=f9e21] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f9e22]
                - link "Privacy Notification" [ref=f9e24] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f9e25]
                - link "Privacy Notification" [ref=f9e27] [cursor=pointer]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f9e28]
          - iframe
  - generic [ref=e76]:
    - generic [ref=e77] [cursor=pointer]:
      - img [ref=e79]
      - link "Go to shopping options for Test case management" [ref=e81]: Test case management
    - button "Close shopping anchor" [ref=e82]
```

# Test source

```ts
  1 | import {test} from "@playwright/test"
  2 | 
  3 | test('register test case',async({page})=>{
  4 |     await page.goto("https://automationexercise.com/login")
> 5 |     await page.getByPlaceholder('Email Address').fill("haritha1@gmail.com");
    |                                                  ^ Error: locator.fill: Error: strict mode violation: getByPlaceholder('Email Address') resolved to 3 elements:
  6 |     await page.getByPlaceholder('Password').fill("haritha");
  7 |     await page.getByRole('button',{name:'Login'}).click();
  8 | 
  9 | });
```