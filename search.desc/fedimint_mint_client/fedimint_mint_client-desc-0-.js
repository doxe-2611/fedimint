searchState.loadedDescShard("fedimint_mint_client", 0, "<code>Nonce</code> but blinded by the user key\nThe operation has been created and is waiting to be …\nThe e-cash has been selected and given to the caller\nBy default, the maximum notes per denomination when …\nThe operation has been completed successfully.\nSome error happened and the operation failed.\nInvite code to join the federation by which the e-cash was …\nWe are waiting for blind signatures to arrive but can …\nThe <code>MintClientModule</code> is responsible for handling e-cash …\nThe mint module currently doesn’t define any consensus …\nResult of Federation members confirming <code>MintOutput</code> by …\nOld and no longer used, will be deleted in the future\nOld and no longer used, will be deleted in the future\nUnique ID of a mint note.\nAn verifiable one time use IOU from the mint.\nAn index used to deterministically derive <code>Note</code>s\nDefines a strategy for selecting e-cash notes given a …\nAn encapsulation of <code>FederationId</code> and e-cash notes in the …\nFor extendability <code>OOBNotes</code> consists of parts, where client …\nWe tried to cancel the operation automatically after the …\nEither <code>legacy_out_point</code> or both <code>txid</code> and <code>out_point_indices</code> …\nThe high-level state of a reissue operation started with …\nSelect notes with total amount of <em>at least</em> <code>request_amount</code>. …\nSelect notes with total amount of <em>exactly</em> <code>request_amount</code>. …\nCaution: if no notes of the correct denomination are …\nThe high-level state of a raw e-cash spend operation …\nA <code>Note</code> with associated secret key that allows to proof …\nA version of <code>SpendableNote</code> that didn’t decode the …\nWe tried to cancel the operation automatically after the …\nThe user-requested cancellation failed, the e-cash notes …\nThe user requested a cancellation of the operation, we are …\nThe user-requested cancellation was successful, we got all …\nAPI client impl for mint-specific requests\nWait for the e-cash notes to be retrieved. If this is not …\nModularized Cli for sending and receiving out-of-band ecash\nDatabase keys used throughout the mint client module\nProvisional implementation of note consolidation\nCreate a mint input from external, potentially untrusted …\nCreates a mint output close to the given <code>amount</code>, issuing …\nBase64 encode a set of e-cash notes for out-of-band …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDecode a set of out-of-band e-cash notes from a base64 …\nPick <code>SpendableNote</code>s by given counts, when available\nReturns the number of held e-cash notes per denomination\nReturns the number of held e-cash notes per denomination\nReturns the number of held e-cash notes per denomination\nState machines for mint inputs\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWe always keep track of an incrementing index in the …\nDerive the note <code>DerivableSecret</code> from the Mint’s <code>secret</code> …\nState machines for out-of-band transmitted e-cash notes\nState machines for mint outputs\nTry to reissue e-cash notes received from a third party to …\nDetermines the denominations to use when representing an …\nSelect notes from stream for requested_amount. The stream …\nSelect notes with <code>requested_amount</code> using <code>notes_selector</code>.\nAccess the nonce as the public key to the spend key\nFetches and removes notes of <em>at least</em> amount <code>min_amount</code> …\nFetches and removes notes from the wallet to be sent to …\nSubscribe to updates on the progress of a reissue …\nSubscribe to updates on the progress of a raw e-cash spend …\nReturns the total value of all notes in msat as <code>Amount</code>\nTry to cancel a spend operation started with …\nValidate the given notes and return the total amount of …\nVerify the note’s validity under a mit key <code>pk</code>\nCheck if an e-cash  note was already issued for the given …\nCheck if an e-cash note was already spent.\nSnapshot of a ecash state (notes)\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAn empty backup with, like a one created by a newly …\nNewtype over <code>BlindedMessage</code> to enable <code>Ord</code>\nThe state machine used for fast-forwarding backup from …\nAdd next nonce from <code>amount</code> tier to the …\nTotal burned amount\nTotal amount probably burned due to re-using nonces\nFill each tier pool to the gap limit\nHandle session outcome, adjusting the current state\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe number of nonces we look-ahead when looking for mints …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\n<code>LastECashNoteIndex</code> but tracked in flight. Basically max …\nNote index to derive next note in a given amount tier\nTail of <code>pending</code>. <code>pending_notes</code> is filled by generating …\nReact to a valid pending nonce being tracked being used in …\nNext nonces that we expect might soon get used. Once we …\nNonces that we track that are currently spendable.\nPublic key shares for each peer\nAggregate public key for each amount tier\nThreshold\nUnsigned notes\nNonces that we have already used. Used for detecting …\nReissue out of band notes\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nAn iterator over the variants of DbKeyPrefix\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMaps all <code>Unreachable</code> states in the state machine to …\nFees charged for ecash transactions\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe maximum amount of change a client can request\nThe mint module will charge a non-configurable base fee of …\nThe set of public keys for blind-signing all peers and note\nSecret keys for blind-signing ecash of varying note …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nA mint inputs bundle was submitted as a part of a general …\nState machine managing the e-cash redemption process …\nRefunded multiple notes in a single tx, if fails, switch to\nRefunded note via multiple single-note transactions\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe e-cash has been taken out of the wallet and we are …\nObsoleted, legacy from <code>MintOOBStatesV1</code>, like …\nThe e-cash has been taken out of the wallet and we are …\nState machine managing e-cash that has been taken out of …\nThe timeout of this out-of-band transaction was hit and we …\nThe timeout of this out-of-band transaction was hit and we …\nThe user has triggered a refund.\nObsoleted, legacy from <code>MintOOBStatesV1</code>, like …\nThe user has triggered a refund.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe txid we are hoping succeeds refunding all notes in one …\nThe notes we are going to refund individually if it doesn…\nThe transaction containing the issuance was rejected, we …\nChild ID used to derive the blinding key from a note’s …\nIssuance request was created, we are waiting for blind …\nIssuance request was created, we are waiting for blind …\nThe transaction containing the issuance was accepted but …\nState machine managing the e-cash issuance process related …\nSee <code>MintOutputStates</code>\nSee <code>MintOutputStates</code>\nSee <code>MintOutputStates</code>\nSee <code>MintOutputStates</code>\nSee <code>MintOutputStates</code>\nKeeps the data to generate <code>SpendableNote</code> once the mint …\nChild ID used to derive the spend key from a note’s …\nThe issuance was completed successfully and the e-cash …\nKey to unblind the blind signature supplied by the mint …\nUse the blind signature to create spendable e-cash notes\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGenerate a request session for a single note and returns …\nReturn nonce of the e-cash note being requested\nSpend key from which the note nonce (corresponding public …\nPanics")