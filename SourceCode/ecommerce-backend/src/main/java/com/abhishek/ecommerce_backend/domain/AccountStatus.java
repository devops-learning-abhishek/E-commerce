package com.abhishek.ecommerce_backend.domain;

public enum AccountStatus {

    PENDING_VERIFICATION,     // Account is created but not yet verified
    ACTIVE,                   // Account is active and in good standing
    SUSPENDED,                // Account is temporarily suspended, due to violation
    DEACTIVATED,              // Account is deactivated, user may have chosen to deactive it
    BANNED,                   // Account is permanently banned due to severe violation
    CLOSED                    // Account is permenentaly closed, possibly at user request
}
