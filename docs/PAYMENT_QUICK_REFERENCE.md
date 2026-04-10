# Quick Reference: Recording Payments

## 🎯 Quick Steps

### Record a Payment (3 steps)

1. **Navigate**: Accounting → Customers → [Customer Name] → View Statement
2. **Click**: Green "Record Payment" button
3. **Fill & Submit**:
   - Amount received
   - Payment date
   - Payment method
   - Reference number
   - (Optional) Link to specific invoice

---

## 💡 Payment Methods

| Method | Use For | Reference Example |
|--------|---------|-------------------|
| 💵 **Cash** | Cash payments | RCPT-001 |
| 🏦 **Bank Transfer** | Wire transfers, ACH | TXN-ABC123 |
| 📝 **Cheque** | Check payments | CHQ-456789 |
| 📱 **Mobile Money** | M-Pesa, etc. | MP-XYZ999 |

---

## 📊 Invoice Status Flow

```
DRAFT → SENT → PARTIAL → PAID
         ↓       ↑
      OVERDUE    └─ (auto-updates based on payments)
```

- **DRAFT**: Not yet sent to customer
- **SENT**: Invoice issued, awaiting payment
- **PARTIAL**: Partially paid
- **PAID**: Fully paid
- **OVERDUE**: Past due date, unpaid

---

## 🔄 Common Workflows

### Full Payment
1. Record Sale: $1,000
2. Record Payment: $1,000 (allocate to invoice)
3. ✅ Invoice → PAID

### Partial Payment
1. Record Sale: $1,000
2. Record Payment: $400 (allocate to invoice)
3. 🟡 Invoice → PARTIAL
4. Record Payment: $600 (allocate to same invoice)
5. ✅ Invoice → PAID

### Multiple Invoices
1. Record Sale #1: $500
2. Record Sale #2: $300
3. Record Payment: $800 (unallocated)
4. ✅ Customer balance reduced by $800

---

## 🎨 UI Locations

### Record Payment Button
- **Customer Statement Page**: Top right, green button
- **Keyboard Shortcut**: None (click required)

### View Payments
- **Customer Statement**: Shows all transactions with debits/credits
- **Running Balance**: Updated after each transaction

---

## ⚡ Pro Tips

✅ **DO:**
- Record payments on the day received
- Always include reference numbers
- Allocate to specific invoices when possible
- Review statements monthly

❌ **DON'T:**
- Forget to record partial payments
- Skip reference numbers
- Record future-dated payments
- Duplicate payment entries

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Payment not showing | Check date filters, refresh page |
| Status not updating | Ensure payment allocated to invoice |
| Wrong balance | Review all transactions, check for duplicates |
| Can't find customer | Use customer search or check spelling |

---

## 📞 Quick Links

- **Customers**: `/dashboard/accounting/customers`
- **Sales**: `/dashboard/accounting/sales`
- **API Docs**: See `RECORDING_PAYMENTS.md`

---

## 🔐 Permissions Required

- **View Customers**: To see customer list
- **Record Payments**: To create payment records
- **View Statements**: To access customer statements

---

*Last updated: February 2026*
