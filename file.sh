    npx shadcn@latest init
    ```
    (Press Enter to accept the defaults for all prompts).

2.  Add the Card component:
    ```bash
    npx shadcn@latest add card
    ```

### Step 6: Add Your Code
Now, create the files I provided earlier in the `src` folder.

1.  **Create Types**: Create `src/types/calendar.ts` and add the `MonthData` interface.
2.  **Create Component**: Create `src/components/CalendarCard.tsx` and paste the code I generated.
3.  **Update App**: Open `src/App.tsx`, delete the existing code, and paste the main App logic (ensure it imports `CalendarCard` and passes the data).

*Note: You will need to make sure the `data` prop in `App.tsx` matches the `MonthData` structure defined in your types file.*

### Step 7: Run the App
Start the development server:
